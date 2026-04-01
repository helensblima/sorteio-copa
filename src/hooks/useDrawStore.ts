import { create } from 'zustand'
import { drawGroups } from '@/services/drawGroups'
import { getTeams } from '@/repositories/teamRepository'
import { saveState, loadState, clearState } from '@/repositories/localStorageRepo'
import type { DrawResult } from '@/types'

interface DrawState {
  nGroups: number
  groupSize: number
  selected: Set<string>
  drawResult: DrawResult | null
  isDrawing: boolean
}

interface DrawActions {
  setNGroups: (n: number) => void
  setGroupSize: (n: number) => void
  setPreset: (nGroups: number, groupSize: number) => void
  toggleTeam: (code: string) => void
  clearSelection: () => void
  performDraw: () => void
  swapTeams: (fromGroup: number, fromIndex: number, toGroup: number, toIndex: number) => void
  reDraw: () => void
  reset: () => void
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

function getInitialState(): DrawState {
  const saved = loadState()

  if (saved) {
    return {
      nGroups: saved.nGroups,
      groupSize: saved.groupSize,
      selected: new Set(saved.selected),
      drawResult: saved.drawResult ?? null,
      isDrawing: false,
    }
  }

  return {
    nGroups: 8,
    groupSize: 4,
    selected: new Set<string>(),
    drawResult: null,
    isDrawing: false,
  }
}

function persist(state: DrawState) {
  saveState({
    nGroups: state.nGroups,
    groupSize: state.groupSize,
    selected: [...state.selected],
    drawResult: state.drawResult,
  })
}

export const useDrawStore = create<DrawState & DrawActions>((set, get) => ({
  ...getInitialState(),

  setNGroups: (n) => {
    set({ nGroups: clamp(n, 2, 8) })
    persist(get())
  },

  setGroupSize: (n) => {
    set({ groupSize: clamp(n, 2, 4) })
    persist(get())
  },

  setPreset: (nGroups, groupSize) => {
    set({
      nGroups: clamp(nGroups, 2, 8),
      groupSize: clamp(groupSize, 2, 4),
    })
    persist(get())
  },

  toggleTeam: (code) => {
    set((state) => {
      const next = new Set(state.selected)
      if (next.has(code)) {
        next.delete(code)
      } else {
        const totalNeeded = state.nGroups * state.groupSize
        if (next.size >= totalNeeded) return state
        next.add(code)
      }
      return { selected: next }
    })
    persist(get())
  },

  clearSelection: () => {
    set({ selected: new Set<string>() })
    persist(get())
  },

  performDraw: () => {
    const { selected, nGroups, groupSize } = get()
    const allTeams = getTeams()
    const selectedTeams = allTeams.filter((t) => selected.has(t.code))

    set({ isDrawing: true })

    setTimeout(() => {
      const groups = drawGroups(selectedTeams, { nGroups, groupSize })
      const result: DrawResult = { groups, timestamp: Date.now() }
      set({ drawResult: result, isDrawing: false })
      persist(get())
    }, 1500)
  },

  swapTeams: (fromGroup, fromIndex, toGroup, toIndex) => {
    set((state) => {
      if (!state.drawResult) return state

      const nextGroups = state?.drawResult?.groups?.map((group) => ({
        ...group,
        teams: [...group.teams],
      }))

      const teamA = nextGroups[fromGroup].teams[fromIndex]
      const teamB = nextGroups[toGroup].teams[toIndex]
      nextGroups[fromGroup].teams[fromIndex] = teamB
      nextGroups[toGroup].teams[toIndex] = teamA

      return {
        drawResult: {
          ...state.drawResult,
          groups: nextGroups,
        },
      }
    })
    persist(get())
  },

  reDraw: () => {
    get().performDraw()
  },

  reset: () => {
    set({
      nGroups: 8,
      groupSize: 4,
      selected: new Set<string>(),
      drawResult: null,
      isDrawing: false,
    })
    clearState()
  },
}))
