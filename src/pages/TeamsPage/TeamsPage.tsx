import { Button, SearchInput, FilterChip, TeamRow, CounterRing, EmptyState } from '@/components'
import { TeamsBanner } from './TeamsBanner'
import { useTeamsPage } from './useTeamsPage'
import './styles.scss'

export function TeamsPage() {
  const {
    teams,
    selected,
    totalNeeded,
    query,
    filter,
    confederations,
    toggleTeam,
    setQuery,
    setFilter,
    navigate,
    isLimitReached,
    performDraw,
  } = useTeamsPage()

  return (
    <div className='teams-page'>
      <div className='teams-page__content'>
        <div className='teams-page__left'>
          <div className='teams-page__header'>
            <h1 className='teams-page__title'>Escolha os países</h1>
            <p className='teams-page__subtitle'>
              Selecione os países que vão participar. Sem duplicatas.
            </p>
          </div>
          <TeamsBanner count={selected.size} total={totalNeeded} />
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder='Buscar por nome ou código (ex: BRA)…'
          />
          <FilterChip options={confederations} active={filter} onChange={setFilter} />
          <div className='teams-page__list'>
            {teams.length === 0 ? (
              <EmptyState icon='🔍' title='Nenhum país encontrado'>
                <p>Tente outro nome ou código.</p>
                <p>Ex: "BRA", "France", "España".</p>
              </EmptyState>
            ) : (
              teams.map((team) => (
                <TeamRow
                  key={team.code}
                  flag={team.flag}
                  name={team.name}
                  code={team.code}
                  alt={team.alt}
                  confederation={team.confederation}
                  selected={selected.has(team.code)}
                  disabled={!selected.has(team.code) && isLimitReached}
                  onToggle={() => toggleTeam(team.code)}
                />
              ))
            )}
          </div>
        </div>

        <div className='teams-page__right'>
          <div className='teams-page__sidebar'>
            <div className='teams-page__progress'>
              <h3 className='teams-page__progress-title'>Progresso</h3>
              <CounterRing count={selected.size} total={totalNeeded} />
            </div>

            <div className='teams-page__selected'>
              <h3 className='teams-page__selected-title'>Selecionados</h3>
              {selected.size === 0 ? (
                <EmptyState icon='🗂️' title='Nenhum país'>
                  <p className='teams-page__selected-tmob'>Clique nos países acima.</p>
                  <p className='teams-page__selected-tdesk'>Clique nos países à esquerda.</p>
                </EmptyState>
              ) : (
                <div className='teams-page__chips'>
                  {[...selected].map((code) => {
                    const team = teams.find((t) => t.code === code)
                    return (
                      <div key={code} className='teams-page__chip'>
                        <span>{team?.name ?? code}</span>
                        <button onClick={() => toggleTeam(code)}>×</button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          <div className='teams-page__action'>
            <Button
              variant='default'
              full
              disabled={selected.size !== totalNeeded}
              onClick={() => {
                performDraw()
                navigate('/resultado-sorteio')
              }}
            >
              🎲 Realizar Sorteio
            </Button>
            <span className='teams-page__action-hint'>
              {selected.size === totalNeeded
                ? ''
                : `Selecione ${totalNeeded} países (${selected.size}/${totalNeeded})`}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
