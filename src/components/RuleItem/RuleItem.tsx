import { Toggle } from '@/components'
import './styles.scss'

interface RuleItemProps {
  icon: string
  title: string
  description: string
  enabled: boolean
  onToggle: () => void
}

export function RuleItem({ icon, title, description, enabled, onToggle }: RuleItemProps) {
  return (
    <div className={`rule-item ${enabled ? 'rule-item--active' : ''}`} onClick={onToggle}>
      <span className='rule-item__icon'>{icon}</span>
      <div className='rule-item__body'>
        <strong className='rule-item__title'>{title}</strong>
        <p className='rule-item__desc'>{description}</p>
      </div>
      <Toggle checked={enabled} onChange={onToggle} ariaLabel={title} />
    </div>
  )
}
