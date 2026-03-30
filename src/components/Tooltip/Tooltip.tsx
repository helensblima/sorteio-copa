import './styles.scss'

interface TooltipProps {
  content: string
}

export function Tooltip({ content }: TooltipProps) {
  return (
    <div className='tooltip'>
      <button className='tooltip__trigger' aria-label='Mais informações'>
        ?
      </button>
      <div className='tooltip__box' role='tooltip'>
        {content}
      </div>
    </div>
  )
}
