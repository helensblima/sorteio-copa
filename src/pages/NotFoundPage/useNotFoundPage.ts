import { useNavigate } from 'react-router'

export function useNotFoundPage() {
  const navigate = useNavigate()

  return {
    navigate,
  }
}
