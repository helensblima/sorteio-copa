import { useDrawStore } from './useDrawStore'

export function useTotalNeeded() {
  const nGroups = useDrawStore((s) => s.nGroups)
  const groupSize = useDrawStore((s) => s.groupSize)
  return nGroups * groupSize
}
