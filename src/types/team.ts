export type ConfederationCode = 'CONMEBOL' | 'CONCACAF' | 'UEFA' | 'AFC' | 'CAF'

export interface Team {
  name: string
  code: string
  confederation: ConfederationCode
  qualificationType?: 'host'
}
