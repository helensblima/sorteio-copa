import { useNavigate } from 'react-router'
import { useDrawStore } from '@/hooks/useDrawStore'
import { useTotalNeeded } from '@/hooks/useTotalNeeded'
import { PRESETS } from '@/constants/presets'

export function useConfigPage() {
  const navigate = useNavigate()
  const setNGroups = useDrawStore((s) => s.setNGroups)
  const setGroupSize = useDrawStore((s) => s.setGroupSize)
  const setPreset = useDrawStore((s) => s.setPreset)
  const totalNeeded = useTotalNeeded()
  const nGroups = useDrawStore((s) => s.nGroups)
  const groupSize = useDrawStore((s) => s.groupSize)

  function getActivePreset(): string {
    if (nGroups === 8 && groupSize === 4) return 'copa'
    if (nGroups === 4 && groupSize === 4) return 'mini'
    return 'custom'
  }

  function handlePresetChange(value: string) {
    if (value === 'copa') setPreset(8, 4)
    if (value === 'mini') setPreset(4, 4)
  }

  return {
    nGroups,
    groupSize,
    totalNeeded,
    setNGroups,
    setGroupSize,
    navigate,
    presets: PRESETS,
    activePreset: getActivePreset(),
    handlePresetChange,
  }
}
