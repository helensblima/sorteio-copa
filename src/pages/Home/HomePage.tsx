import { Button, CountriesCarousel, GroupCard } from '@/components'
import { useHomePage } from './useHomePage'
import './styles.scss'

export function HomePage() {
  const { flags, navigate, previewGroups } = useHomePage()

  return (
    <div className='homepage'>
      <div className='homepage__content'>
        <div className='homepage__left'>
          <div className='homepage__pre-title'>World Cup 2026</div>
          <h1 className='homepage__title'>
            Simule <br />o <em>Sorteio</em>
            <br /> da Copa
          </h1>
          <p className='homepage__text'>
            Monte os grupos, escolha os países e sorteie. Configure as regras e ajuste manualmente.
          </p>
          <div className='homepage__actions'>
            <Button
              variant='default'
              full
              between
              onClick={() => navigate('/configuracao-sorteio')}
            >
              Começar sorteio <span>→</span>
            </Button>
            <Button variant='ghost' full between>
              Retomar salvo <span>↩</span>
            </Button>
          </div>
          <CountriesCarousel flags={flags} />
        </div>

        <div className='homepage__right'>
          {previewGroups.map((group) => (
            <GroupCard
              key={group.letter}
              letter={group.letter}
              color={group.color}
              teams={group.teams}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
