import './styles.scss'

interface EmptyStateProps {
  icon: string
  title: string
  children?: React.ReactNode
}

export function EmptyState({ icon, title, children }: EmptyStateProps) {
  return (
    <div className='empty-state'>
      <span className='empty-state__icon'>{icon}</span>
      <strong className='empty-state__title'>{title}</strong>
      {children && <div className='empty-state__text'>{children}</div>}
    </div>
  )
}
