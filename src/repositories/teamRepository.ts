import teamsData from '@/data/teams.json'
import type { Team } from '@/types'

export function getTeams(): Team[] {
  return teamsData.teams as Team[]
}
