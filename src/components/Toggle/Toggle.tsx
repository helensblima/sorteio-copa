import './styles.scss'

interface ToggleProps {
  checked: boolean
  onChange: () => void
  ariaLabel: string
}

export function Toggle({ checked, onChange, ariaLabel }: ToggleProps) {
  return (
    <button
      className={`toggle ${checked ? 'toggle--on' : ''}`}
      onClick={(e) => {
        e.stopPropagation()
        onChange()
      }}
      role='switch'
      aria-checked={checked}
      aria-label={ariaLabel}
    />
  )
}
