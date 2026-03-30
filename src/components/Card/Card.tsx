import './styles.scss'

interface CardProps {
  title: string
  description?: string
  children?: React.ReactNode
  titleExtra?: React.ReactNode
}

export function Card({ title, description, children, titleExtra }: CardProps) {
  return (
    <div className='card'>
      <div className='card__infos'>
        <div className='card__header'>
          <h2 className='card__title'>{title}</h2>
          {titleExtra}
        </div>
        {description && <p className='card__desc'>{description}</p>}
      </div>
      {children}
    </div>
  )
}
