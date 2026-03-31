import './styles.scss'

interface CounterRingProps {
  count: number
  total: number
}

export function CounterRing({ count, total }: CounterRingProps) {
  const circumference = 2 * Math.PI * 22
  const pct = total > 0 ? Math.min(1, count / total) : 0
  const offset = circumference * (1 - pct)
  const isReady = count === total && total > 0

  return (
    <div className='counter-ring'>
      <div className='counter-ring__visual'>
        <svg className='counter-ring__svg' viewBox='0 0 52 52'>
          <circle className='counter-ring__track' cx='26' cy='26' r='22' />
          <circle
            className='counter-ring__fill'
            cx='26'
            cy='26'
            r='22'
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className={`counter-ring__number ${isReady ? 'counter-ring__number--ready' : ''}`}>
          {count}
        </span>
      </div>
      <div className='counter-ring__info'>
        <div className='counter-ring__main'>
          {count} <span>/ {total}</span>
        </div>
        <p className='counter-ring__sub'>
          {isReady ? '✓ Pronto para sortear!' : `faltam ${total - count} países`}
        </p>
      </div>
    </div>
  )
}
