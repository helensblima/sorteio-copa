import { useState } from 'react'

interface UseSwapModalProps {
  onConfirm: (toGroup: number, toIndex: number) => void
  onClose: () => void
}

export function useSwapModal({ onConfirm, onClose }: UseSwapModalProps) {
  const [destGroup, setDestGroup] = useState<number | null>(null)
  const [destTeam, setDestTeam] = useState<number | null>(null)
  const [isClosing, setIsClosing] = useState(false)

  function handleGroupChange(value: string) {
    setDestGroup(value ? Number(value) : null)
    setDestTeam(null)
  }

  function handleTeamSelect(index: number) {
    setDestTeam(index)
  }

  function handleConfirm() {
    if (destGroup !== null && destTeam !== null) {
      setIsClosing(true)
      setTimeout(() => {
        onConfirm(destGroup, destTeam)
        setIsClosing(false)
      }, 400)
    }
  }

  function handleClose() {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 400)
  }

  const canConfirm = destGroup !== null && destTeam !== null

  return {
    destGroup,
    destTeam,
    canConfirm,
    isClosing,
    handleGroupChange,
    handleTeamSelect,
    handleConfirm,
    handleClose,
  }
}
