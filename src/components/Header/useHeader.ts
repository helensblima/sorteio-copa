import { useLocation, useNavigate } from 'react-router'
import { STEPS } from '@/constants/steps'

export function useHeader() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const currentStep = STEPS.findIndex((step) => step.path === pathname)

  function goHome() {
    navigate('/')
  }

  return { steps: STEPS, currentStep, goHome }
}