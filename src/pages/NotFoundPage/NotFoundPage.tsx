import { ErrorPage, Button } from '@/components'
import { useNotFoundPage } from './useNotFoundPage'

export function NotFoundPage() {
  const { navigate } = useNotFoundPage()

  return (
    <ErrorPage
      variant='not-found'
      code={404}
      emoji='⚽'
      title='Página não encontrada'
      description='Essa URL saiu pela linha de fundo. Verifique o endereço ou volte ao início.'
    >
      <Button full between onClick={() => navigate('/')}>
        Voltar ao início <span>→</span>
      </Button>
    </ErrorPage>
  )
}
