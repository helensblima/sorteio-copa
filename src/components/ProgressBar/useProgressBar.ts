export function useProgressBar(currentStep: number) {
  function getStepStatus(index: number): string {
    if (index < currentStep) return 'done'
    if (index === currentStep) return 'active'
    return ''
  }

  return { getStepStatus }
}
