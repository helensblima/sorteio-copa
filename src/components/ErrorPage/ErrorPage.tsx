import './styles.scss'

interface Props {
  variant: 'not-found'
  code: number
  emoji: string
  title: string
  description: string
  children: React.ReactNode
}

export function ErrorPage({ variant, code, emoji, title, description, children }: Props) {
  const [d1, d2, d3] = String(code).split('')

  return (
    <div className='error-page'>
      <span className={`error-page__label error-page__label--${variant}`}>
        {variant === 'not-found' ? 'Erro' : 'Falha'}
      </span>
      <span className='error-page__emoji'>{emoji}</span>
      <h1 className={`error-page__code error-page__code--${variant}`}>
        {d1}
        <span>{d2}</span>
        {d3}
      </h1>
      <h2 className='error-page__title'>{title}</h2>
      <p className='error-page__description'>{description}</p>
      <div className='error-page__actions'>{children}</div>
    </div>
  )
}
