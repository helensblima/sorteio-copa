import { shuffle } from './shuffle'
import type { Team, DrawSettings, Group } from '@/types'

export function drawGroups(teams: Team[], config: DrawSettings): Group[] {
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
