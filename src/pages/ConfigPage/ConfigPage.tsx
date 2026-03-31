import { Button, Banner, Tooltip, Card, Stepper, Preset } from '@/components'
import { useConfigPage } from './useConfigPage'
import './styles.scss'

export function ConfigPage() {
  const {
    nGroups,
    groupSize,
    totalNeeded,
    activePreset,
    presets,
    setNGroups,
    setGroupSize,
    navigate,
    handlePresetChange,
  } = useConfigPage()

  return (
    <div className='config-page'>
      <div className='config-page__content'>
        <div className='config-page__header'>
          <Button variant='icon' onClick={() => navigate('/')}>
            ←
          </Button>
          <div>
            <h1 className='config-page__title'>Configure o Sorteio</h1>
            <p className='config-page__subtitle'>Defina a estrutura dos grupos.</p>
          </div>
        </div>
        <Banner variant='ok' icon='✅'>
          Tudo certo! <strong>{totalNeeded}</strong> países para <strong>{nGroups}</strong> grupos
          de <strong>{groupSize}</strong>.
        </Banner>
        <div className='config-page__cards'>
          <Card
            title='Número de grupos'
            description='Quantos grupos? Na Copa real são 8.'
            titleExtra={<Tooltip content='Máximo de 8 grupos — modelo oficial FIFA.' />}
          >
            <Stepper
              value={nGroups}
              min={2}
              max={8}
              onChange={setNGroups}
              hint={`${nGroups} grupos`}
            />
          </Card>
          <Card
            title='Times por grupo'
            description='Quantos países em cada grupo? Na Copa real são 4.'
            titleExtra={<Tooltip content='Máximo de 4 times por grupo — modelo oficial FIFA.' />}
          >
            <Stepper
              value={groupSize}
              min={2}
              max={4}
              onChange={setGroupSize}
              hint={`${groupSize} times por grupo`}
            />
            <Preset options={presets} active={activePreset} onChange={handlePresetChange} />
          </Card>
        </div>
        <Button variant='accent' full size='lg' onClick={() => navigate('/escolha-selecoes')}>
          Próximo: Escolher países →
        </Button>
      </div>
    </div>
  )
}
