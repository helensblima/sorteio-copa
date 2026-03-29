import { useNavigate } from 'react-router'
import { FLAGS } from '@/constants/flags'

export function useHomePage() {
  const navigate = useNavigate()

  return { flags: FLAGS, navigate }
}
