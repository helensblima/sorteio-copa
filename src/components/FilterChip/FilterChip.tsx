import './styles.scss'

interface FilterOption {
  label: string
  value: string
  color?: string
}

interface FilterChipProps {
  options: FilterOption[]
  active: string
  onChange: (value: string) => void
}

export function FilterChip({ options, active, onChange }: FilterChipProps) {
  return (
    <div className='filter-chip' role='group' aria-label='Filtrar por região'>
      {options.map((option) => (
        <button
          key={option.value}
          className={`filter-chip__btn ${active === option.value ? 'filter-chip__btn--active' : ''}`}
          onClick={() => onChange(option.value)}
        >
          {option.color && (
            <span className='filter-chip__dot' style={{ background: option.color }} />
          )}
          {option.label}
        </button>
      ))}
    </div>
  )
}
