import { shuffle } from './shuffle'
import type { Team, Group } from '@/types'

interface DrawConfig {
  nGroups: number
  groupSize: number
}

export function drawGroups(teams: Team[], config: DrawConfig): Group[] {
  const { nGroups, groupSize } = config

  if (teams.length !== nGroups * groupSize) {
    throw new Error(`Esperado ${nGroups * groupSize} times, recebeu ${teams.length}`)
  }

  const shuffled = shuffle(teams)
  const letters = 'ABCDEFGH'

  return Array.from({ length: nGroups }, (_, i) => ({
    name: letters[i] as Group['name'],
    teams: shuffled.slice(i * groupSize, (i + 1) * groupSize),
  }))
}
