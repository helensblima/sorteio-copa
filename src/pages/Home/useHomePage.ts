import { useNavigate } from 'react-router'
import { FLAGS } from '@/constants/flags'
import { PREVIEW_GROUPS } from '@/constants/previewGroups'

export function useHomePage() {
  const navigate = useNavigate()

  return { flags: FLAGS, navigate, previewGroups: PREVIEW_GROUPS }
}
