import './styles.scss'

interface SpinnerProps {
  title?: string
  subtitle?: string
}

export function Spinner({ title, subtitle }: SpinnerProps) {
  return (
    <div className='spinner-overlay' role='dialog' aria-modal='true' aria-label={title}>
      <div className='spinner-overlay__spin' />
      <div className='spinner-overlay__infos'>
        <div className='spinner-overlay__title'>{title}</div>
        <div className='spinner-overlay__subtitle'>{subtitle}</div>
      </div>
    </div>
  )
}
