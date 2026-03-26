import type { Team } from './team'

export type NameGroup = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

export interface Group {
  name: NameGroup
  teams: Team[]
}

export interface DrawRules {
  conf: boolean
  pots: boolean
}

export interface DrawSettings {
  nGroups: number
  groupSize: number
  rules: DrawRules
}
