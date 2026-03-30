import './styles.scss'

type BannerVariant = 'info' | 'ok' | 'warn' | 'error'

interface BannerProps {
  variant?: BannerVariant
  icon?: string
  children: React.ReactNode
}

export function Banner({ variant = 'info', icon, children }: BannerProps) {
  return (
    <div className={`banner banner--${variant}`} role='status'>
      {icon && <span className='banner__icon'>{icon}</span>}
      <span className='banner__text'>{children}</span>
    </div>
  )
}
