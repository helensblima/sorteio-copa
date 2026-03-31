import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDrawStore } from '@/hooks/useDrawStore'
import { useTotalNeeded } from '@/hooks/useTotalNeeded'
import { getTeams } from '@/repositories/teamRepository'
import { FLAG_ALT, FLAG_MAP } from '@/constants/flagMap'
import { normalizeSearch } from '@/utils/normalizeSearch'
import { CONFEDERATIONS } from '@/constants/confederations'

export function useTeamsPage() {
  const navigate = useNavigate()

  const totalNeeded = useTotalNeeded()

  const selected = useDrawStore((s) => s.selected)
  const toggleTeam = useDrawStore((s) => s.toggleTeam)

  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const allTeams = getTeams()

  const teams = allTeams
    .filter((team) => {
      if (filter !== 'all' && team.confederation !== filter) return false

      if (query) {
        const normalized = normalizeSearch(query)
        const matchName = normalizeSearch(team.name).includes(normalized)
        const matchCode = normalizeSearch(team.code).includes(normalized)
        if (!matchName && !matchCode) return false
      }

      return true
    })
    .map((team) => ({
      ...team,
      flag: FLAG_MAP[team.code] ?? '',
      alt: FLAG_ALT[team.code] ?? team.name,
    }))

  const isLimitReached = selected.size >= totalNeeded

  return {
    teams,
    selected,
    totalNeeded,
    query,
    filter,
    toggleTeam,
    setQuery,
    setFilter,
    navigate,
    confederations: CONFEDERATIONS,
    isLimitReached,
  }
}
