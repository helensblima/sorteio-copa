import { Banner } from '@/components'

interface TeamsBannerProps {
  count: number
  total: number
}

export function TeamsBanner({ count, total }: TeamsBannerProps) {
  if (count === 0) {
    return (
      <Banner variant='info' icon='💡'>
        Clique em um país para selecioná-lo.
      </Banner>
    )
  }

  if (count < total) {
    return (
      <Banner variant='warn' icon='⏳'>
        <strong>{count}</strong> de <strong>{total}</strong> países. Faltam{' '}
        <strong>{total - count}</strong>.
      </Banner>
    )
  }

  return (
    <Banner variant='ok' icon='✅'>
      Perfeito! <strong>{total}</strong> países prontos.
    </Banner>
  )
}
