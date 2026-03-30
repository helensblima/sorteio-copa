import './styles.scss'

interface PresetOption {
  label: string
  value: string
}

interface PresetProps {
  options: PresetOption[]
  active: string
  onChange: (value: string) => void
}

export function Preset({ options, active, onChange }: PresetProps) {
  return (
    <div className='preset'>
      {options.map((option) => (
        <button
          key={option.value}
          className={`preset__btn ${active === option.value ? 'preset__btn--active' : ''}`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
