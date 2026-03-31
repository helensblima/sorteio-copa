import { Button, CountriesCarousel, GroupCard } from '@/components'
import { useHomePage } from './useHomePage'
import './styles.scss'

export function HomePage() {
  const { hasData, flags, previewGroups, handleRestore, navigate } = useHomePage()

  return (
    <div className='home-page'>
      <div className='home-page__content'>
        <div className='home-page__left'>
          <div className='home-page__pre-title'>World Cup 2026</div>
          <h1 className='home-page__title'>
            Simule <br />o <em>Sorteio</em>
            <br /> da Copa
          </h1>
          <p className='home-page__text'>
            Monte os grupos, escolha os países e sorteie. Configure as regras e ajuste manualmente.
          </p>
          <div className='home-page__actions'>
            <Button
              variant='default'
              full
              between
              onClick={() => navigate('/configuracao-sorteio')}
            >
              Começar sorteio <span>→</span>
            </Button>
            <Button variant='ghost' full between disabled={!hasData} onClick={handleRestore}>
              Retomar salvo <span>↩</span>
            </Button>
          </div>
          <CountriesCarousel flags={flags} />
        </div>

        <div className='home-page__right'>
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
