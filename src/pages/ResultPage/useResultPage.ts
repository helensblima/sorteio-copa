import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDrawStore } from '@/hooks/useDrawStore'
import { GROUP_COLORS } from '@/constants/groupColors'
import { FLAG_MAP, FLAG_ALT } from '@/constants/flagMap'

interface SwapModalState {
  groupIndex: number
  teamIndex: number
  teamName: string
  teamCode: string
}

export function useResultPage() {
  const navigate = useNavigate()

  const drawResult = useDrawStore((s) => s.drawResult)
  const isDrawing = useDrawStore((s) => s.isDrawing)
  const nGroups = useDrawStore((s) => s.nGroups)
  const groupSize = useDrawStore((s) => s.groupSize)
  const selected = useDrawStore((s) => s.selected)
  const selectedCount = selected.size
  const swapTeams = useDrawStore((s) => s.swapTeams)
  const reDraw = useDrawStore((s) => s.reDraw)
  const reset = useDrawStore((s) => s.reset)

  const [swapModal, setSwapModal] = useState<SwapModalState | null>(null)

  const mappedResult = drawResult?.groups?.map((group) => ({
    ...group,
    teams: group.teams.map((team) => ({
      ...team,
      flag: FLAG_MAP[team.code] ?? '',
      alt: FLAG_ALT[team.code] ?? team.name,
      conf: team.confederation,
      confClass: team.confederation.toLowerCase(),
    })),
  }))

  const metaItems = [
    { value: nGroups, label: 'grupos' },
    { value: groupSize, label: 'times por grupo' },
    { value: selectedCount, label: 'países' },
  ]

  function openSwap(groupIndex: number, teamIndex: number) {
    if (!drawResult) return
    const team = drawResult.groups[groupIndex].teams[teamIndex]
    setSwapModal({
      groupIndex,
      teamIndex,
      teamName: team.name,
      teamCode: team.code,
    })
  }

  function closeSwap() {
    setSwapModal(null)
  }

  function confirmSwap(toGroup: number, toIndex: number) {
    if (!swapModal) return
    swapTeams(swapModal.groupIndex, swapModal.teamIndex, toGroup, toIndex)
    setSwapModal(null)
  }

  function handleReDraw() {
    reDraw()
  }

  function handleReset() {
    if (!window.confirm('Recomeçar do zero? Tudo será apagado.')) return
    reset()
    navigate('/configuracao-sorteio')
  }

  return {
    drawResult: mappedResult,
    isDrawing,
    swapModal,
    openSwap,
    closeSwap,
    confirmSwap,
    handleReDraw,
    handleReset,
    navigate,
    groupColors: GROUP_COLORS,
    metaItems,
  }
}
