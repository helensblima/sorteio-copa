import './styles.scss'

type ButtonVariant = 'default' | 'accent' | 'ghost' | 'ghost-danger' | 'icon'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  full?: boolean
  between?: boolean
  size?: ButtonSize
}

export function Button({
  variant = 'default',
  full,
  between,
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    full && 'btn--full',
    between && 'btn--between',
    size !== 'md' && `btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
