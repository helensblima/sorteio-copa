import { create } from 'zustand'

interface DrawRules {
  conf: boolean
  pots: boolean
}

interface DrawState {
  nGroups: number
  groupSize: number
  rules: DrawRules
  selected: Set<string>

  setNGroups: (n: number) => void
  setGroupSize: (n: number) => void
  toggleRule: (rule: keyof DrawRules) => void
  setPreset: (nGroups: number, groupSize: number) => void
  toggleTeam: (code: string) => void
  clearSelection: () => void
  reset: () => void
}

const INITIAL_STATE = {
  nGroups: 8,
  groupSize: 4,
  rules: { conf: true, pots: false },
  selected: new Set<string>(),
}

export const useDrawStore = create<DrawState>((set) => ({
  ...INITIAL_STATE,

  setNGroups: (n) => set({ nGroups: Math.max(2, Math.min(8, n)) }),
  setGroupSize: (n) => set({ groupSize: Math.max(2, Math.min(4, n)) }),

  toggleRule: (rule) =>
    set((state) => ({
      rules: {
        ...state.rules,
        [rule]: !state.rules[rule],
      },
    })),

  setPreset: (nGroups, groupSize) =>
    set({
      nGroups: Math.max(2, Math.min(8, nGroups)),
      groupSize: Math.max(2, Math.min(4, groupSize)),
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

  reset: () => set({ ...INITIAL_STATE, selected: new Set<string>() }),
}))
