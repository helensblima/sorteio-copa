import { ProgressBar } from '@/components'
import { useHeader } from './useHeader'
import './styles.scss'

export function Header() {
  const { steps, currentStep, goHome } = useHeader()

  return (
    <header className='header'>
      <div className='header__content'>
        <button className='header__logo' onClick={goHome}>
          <span className='header__brand-mark'>⚽</span>
          <span className='header__brand-name'>Copa Game</span>
        </button>
        <ProgressBar steps={steps} currentStep={currentStep} aria-label='Progresso do sorteio' />
      </div>
    </header>
  )
}
