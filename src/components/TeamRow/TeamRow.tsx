import './styles.scss'

interface TeamRowProps {
  flag: string
  name: string
  code: string
  alt: string
  confederation: string
  selected: boolean
  disabled: boolean
  onToggle: () => void
}

export function TeamRow({
  flag,
  name,
  code,
  alt,
  confederation,
  selected,
  disabled,
  onToggle,
}: TeamRowProps) {
  return (
    <div
      className={`team-row ${selected ? 'team-row--selected' : ''} ${disabled ? 'team-row--disabled' : ''}`}
      onClick={() => !disabled && onToggle()}
      role='checkbox'
      aria-checked={selected}
      aria-disabled={disabled}
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === ' ' || e.key === 'Enter') && !disabled) {
          e.preventDefault()
          onToggle()
        }
      }}
    >
      <img src={flag} alt={alt} className='team-row__flag' />
      <span className='team-row__name'>{name}</span>
      <span className='team-row__code'>{code}</span>
      <span className={`team-row__conf team-row__conf--${confederation.toLowerCase()}`}>
        {confederation}
      </span>
      <span className='team-row__check'>{selected ? '✓' : ''}</span>
    </div>
  )
}
