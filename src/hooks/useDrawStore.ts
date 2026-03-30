import { create } from 'zustand'

interface DrawRules {
  conf: boolean
  pots: boolean
}

interface DrawState {
  nGroups: number
  groupSize: number
  rules: DrawRules
  setNGroups: (n: number) => void
  setGroupSize: (n: number) => void
  toggleRule: (rule: keyof DrawRules) => void
  setPreset: (nGroups: number, groupSize: number) => void
  reset: () => void
}

const INITIAL_STATE = {
  nGroups: 8,
  groupSize: 4,
  rules: { conf: true, pots: false },
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

  reset: () => set(INITIAL_STATE),
}))
