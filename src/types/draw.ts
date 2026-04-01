import type { Team } from './team'

export type NameGroup = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

export interface Group {
  name: NameGroup
  teams: Team[]
}

export interface DrawSettings {
  nGroups: number
  groupSize: number
}

export interface DrawResult {
  groups: Group[]
  timestamp: number
}
