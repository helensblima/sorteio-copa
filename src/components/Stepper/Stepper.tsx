import './styles.scss'

interface StepperProps {
  value: number
  min: number
  max: number
  onChange: (value: number) => void
  hint?: string
}

export function Stepper({ value, min, max, onChange, hint }: StepperProps) {
  return (
    <div className='stepper'>
      <div className='stepper__control'>
        <button
          className='stepper__btn'
          onClick={() => onChange(value - 1)}
          disabled={value <= min}
          aria-label='Diminuir'
        >
          −
        </button>
        <span className='stepper__value'>{value}</span>
        <button
          className='stepper__btn'
          onClick={() => onChange(value + 1)}
          disabled={value >= max}
          aria-label='Aumentar'
        >
          +
        </button>
      </div>
      {hint && <span className='stepper__hint'>{hint}</span>}
    </div>
  )
}
