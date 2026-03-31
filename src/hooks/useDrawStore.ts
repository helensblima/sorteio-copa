import { create } from 'zustand'
import { drawGroups } from '@/services/drawGroups'
import { getTeams } from '@/repositories/teamRepository'
import type { Group } from '@/types'
interface DrawState {
  nGroups: number
  groupSize: number
  selected: Set<string>
  drawResult: Group[] | null
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

const INITIAL_STATE = {
  nGroups: 8,
  groupSize: 4,
  selected: new Set<string>(),
  drawResult: null as Group[] | null,
  isDrawing: false,
}

export const useDrawStore = create<DrawState & DrawActions>((set, get) => ({
  ...INITIAL_STATE,

  setNGroups: (n) => set({ nGroups: clamp(n, 2, 8) }),
  setGroupSize: (n) => set({ groupSize: clamp(n, 2, 4) }),
  setPreset: (nGroups, groupSize) =>
    set({
      nGroups: clamp(nGroups, 2, 8),
      groupSize: clamp(groupSize, 2, 4),
    }),

  toggleTeam: (code) =>
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
    }),

  clearSelection: () => set({ selected: new Set<string>() }),

  performDraw: () => {
    const { selected, nGroups, groupSize } = get()
    const allTeams = getTeams()
    const selectedTeams = allTeams.filter((t) => selected.has(t.code))

    set({ isDrawing: true })

    setTimeout(() => {
      const result = drawGroups(selectedTeams, { nGroups, groupSize })
      set({ drawResult: result, isDrawing: false })
    }, 1500)
  },

  swapTeams: (fromGroup, fromIndex, toGroup, toIndex) =>
    set((state) => {
      if (!state.drawResult) return state

      const next = state.drawResult.map((group) => ({
        ...group,
        teams: [...group.teams],
      }))

      const teamA = next[fromGroup].teams[fromIndex]
      const teamB = next[toGroup].teams[toIndex]
      next[fromGroup].teams[fromIndex] = teamB
      next[toGroup].teams[toIndex] = teamA

      return { drawResult: next }
    }),

  reDraw: () => {
    get().performDraw()
  },

  reset: () => set({ ...INITIAL_STATE, selected: new Set<string>() }),
}))
