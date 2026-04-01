import { Button, Banner } from '@/components'
import { FLAG_MAP, FLAG_ALT } from '@/constants/flagMap'
import { useSwapModal } from './useSwapModal'
import type { Group } from '@/types'
import './styles.scss'

interface SwapModalProps {
  teamName: string
  teamCode: string
  fromGroupIndex: number
  groups: Group[]
  onConfirm: (toGroup: number, toIndex: number) => void
  onClose: () => void
}

export function SwapModal({
  teamName,
  fromGroupIndex,
  groups,
  onConfirm,
  onClose,
}: SwapModalProps) {
  const {
    destGroup,
    destTeam,
    canConfirm,
    isClosing,
    handleGroupChange,
    handleTeamSelect,
    handleConfirm,
    handleClose,
  } = useSwapModal({ onConfirm, onClose })

  const availableGroups = groups
    .map((group, index) => ({ group, index }))
    .filter(({ index }) => index !== fromGroupIndex)

  const destGroupTeams = destGroup !== null ? groups[destGroup].teams : []

  return (
    <div className={`swap-overlay ${isClosing ? 'is-closing' : ''}`} onClick={handleClose}>
      <div
        className='swap-modal'
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
      >
        <div className='swap-modal__header'>
          <h2 className='swap-modal__title'>Trocar {teamName}</h2>
          <button className='swap-modal__close' onClick={handleClose} aria-label='Fechar modal'>
            ×
          </button>
        </div>
        <div className='swap-modal__body'>
          <Banner variant='info' icon='↕️'>
            Escolha o grupo e o time para trocar com <strong>{teamName}</strong>.
          </Banner>
          <div className='swap-modal__section'>
            <label className='swap-modal__label'>Escolha o grupo de destino</label>
            <select
              className='swap-modal__select'
              value={destGroup ?? ''}
              onChange={(e) => handleGroupChange(e.target.value)}
            >
              <option value=''>— Selecione um grupo —</option>
              {availableGroups.map(({ group, index }) => (
                <option key={index} value={index}>
                  Grupo {group.name}
                </option>
              ))}
            </select>
          </div>
          {destGroup !== null && (
            <div className='swap-modal__section'>
              <label className='swap-modal__label'>Qual time vem para o lugar?</label>
              <div className='swap-modal__options'>
                {destGroupTeams.map((team, index) => (
                  <button
                    key={team.code}
                    className={`swap-modal__option ${destTeam === index ? 'swap-modal__option--selected' : ''}`}
                    onClick={() => handleTeamSelect(index)}
                  >
                    <img
                      src={FLAG_MAP[team.code]}
                      alt={FLAG_ALT[team.code] ?? team.name}
                      width={18}
                      height={13}
                      className='swap-modal__option-flag'
                    />
                    <span className='swap-modal__option-name'>{team.name}</span>
                    <span className='swap-modal__option-check'>
                      {destTeam === index ? '✓' : ''}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='swap-modal__footer'>
          <Button variant='ghost' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='default' disabled={!canConfirm} onClick={handleConfirm}>
            Trocar times →
          </Button>
        </div>
      </div>
    </div>
  )
}
