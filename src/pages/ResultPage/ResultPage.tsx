import { Button, Banner, GroupCard, Spinner, SwapModal } from '@/components'
import { useResultPage } from './useResultPage'
import './styles.scss'

export function ResultPage() {
  const {
    drawResult,
    isDrawing,
    metaItems,
    groupColors,
    swapModal,
    openSwap,
    closeSwap,
    confirmSwap,
    handleReDraw,
    handleReset,
    navigate,
  } = useResultPage()

  if (isDrawing) {
    return <Spinner title='Sorteando os grupos…' subtitle='Distribuindo as seleções'/>
  }

  if (!drawResult) {
    return (
      <div className='result-page'>
        <div className='result-page__content'>
          <Banner variant='warn' icon='⚠️'>
            Nenhum sorteio realizado. Volte e selecione os times.
          </Banner>
          <Button variant='ghost' onClick={() => navigate('/escolha-selecoes')}>
            ← Voltar para seleção
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className='result-page'>
      <div className='result-page__content'>
        <div className='result-page__topbar'>
          <h1 className='result-page__title'>Resultado do Sorteio 🎉</h1>
          <div className='result-page__actions'>
            <Button variant='ghost' onClick={() => navigate('/escolha-selecoes')}>
              ← Países
            </Button>
            <Button variant='ghost-danger' onClick={handleReset}>
              🗑 Recomeçar
            </Button>
            <Button variant='accent' onClick={handleReDraw}>
              🎲 Re-sortear
            </Button>
          </div>
        </div>
        <Banner variant='ok' icon='✅'>
          Sorteio concluído!
        </Banner>
        <div className='result-page__infos'>
          <p>
            Clique em ↕️ para mover um time para outro grupo, ou clique em <span>Re-sortear</span>{' '}
            para sortear novamente.
          </p>
        </div>
        <div className='result-page__meta'>
          {metaItems.map((item) => (
            <span key={item.label} className='result-page__meta-item'>
              <span className='result-page__meta-dot' />
              <strong>{item.value}</strong> {item.label}
            </span>
          ))}
        </div>
        <div className='result-page__grid'>
          {drawResult.map((group, gi) => (
            <GroupCard
              key={group.name}
              letter={group.name}
              color={groupColors[group.name] || '#0A0A0A'}
              teams={group.teams}
              onSwap={(ti) => openSwap(gi, ti)}
            />
          ))}
        </div>
      </div>
      {swapModal && (
        <SwapModal
          teamName={swapModal.teamName}
          teamCode={swapModal.teamCode}
          fromGroupIndex={swapModal.groupIndex}
          groups={drawResult}
          onConfirm={(toGroup, toIndex) => confirmSwap(toGroup, toIndex)}
          onClose={closeSwap}
        />
      )}
    </div>
  )
}
