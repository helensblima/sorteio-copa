import { useNavigate } from 'react-router'
import { FLAGS } from '@/constants/flags'
import { PREVIEW_GROUPS } from '@/constants/previewGroups'
import { useDrawStore } from '@/hooks/useDrawStore'

export function useHomePage() {
  const drawResult = useDrawStore((s) => s.drawResult)
  const selected = useDrawStore((s) => s.selected)
  const hasData = drawResult !== null || selected.size > 0

  const navigate = useNavigate()

  function handleRestore() {
    if (drawResult) {
      navigate('/resultado-sorteio')
    } else if (selected.size > 0) {
      navigate('/escolha-selecoes')
    } else {
      navigate('/configuracao-sorteio')
    }
  }

  return {
    hasData,
    flags: FLAGS,
    previewGroups: PREVIEW_GROUPS,
    handleRestore,
    navigate,
  }
}
