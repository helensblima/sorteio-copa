import './styles.scss'

interface GroupTeam {
  flag: string
  name: string
  conf: string
  confClass: string
  alt: string
}

interface GroupCardProps {
  letter: string
  color: string
  teams: GroupTeam[]
  onSwap?: (teamIndex: number) => void
}

export function GroupCard({ letter, color, teams, onSwap }: GroupCardProps) {
  return (
    <div className='group-card'>
      <div className='group-card__header' style={onSwap ? { background: color } : undefined}>
        <span className='group-card__letter' style={!onSwap ? { background: color } : undefined}>
          {letter}
        </span>
        <span className='group-card__label' style={!onSwap ? { color: color } : undefined}>
          Grupo {letter}
        </span>
      </div>
      {teams.map((team, index) => (
        <div key={team.name} className='group-card__row'>
          <div className='group-card__left-row'>
            <img
              src={team.flag}
              alt={team.alt}
              className='group-card__flag'
              width={24}
              height={18}
            />
            <span className='group-card__name'>{team.name}</span>
          </div>
          <div className='group-card__right-row'>
            <span className={`group-card__conf group-card__conf--${team.confClass}`}>
              {team.conf}
            </span>
            {onSwap && (
              <button className='group-card__swap' onClick={() => onSwap(index)}>
                ↕
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
