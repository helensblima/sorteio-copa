import { describe, it, expect } from 'vitest'
import { drawGroups } from './drawGroups'
import type { Team } from '@/types'

const mockTeams: Team[] = [
  { name: 'Brazil', code: 'BRA', confederation: 'CONMEBOL' },
  { name: 'Argentina', code: 'ARG', confederation: 'CONMEBOL' },
  { name: 'France', code: 'FRA', confederation: 'UEFA' },
  { name: 'Spain', code: 'ESP', confederation: 'UEFA' },
  { name: 'Japan', code: 'JPN', confederation: 'AFC' },
  { name: 'Morocco', code: 'MAR', confederation: 'CAF' },
  { name: 'USA', code: 'USA', confederation: 'CONCACAF' },
  { name: 'Australia', code: 'AUS', confederation: 'AFC' },
]

describe('drawGroups', () => {
  it('cria a quantidade correta de grupos', () => {
    const result = drawGroups(mockTeams, { nGroups: 2, groupSize: 4 })
    expect(result).toHaveLength(2)
  })

  it('cada grupo tem o tamanho correto', () => {
    const result = drawGroups(mockTeams, { nGroups: 4, groupSize: 2 })
    result.forEach((group) => {
      expect(group.teams).toHaveLength(2)
    })
  })

  it('grupos têm letras sequenciais', () => {
    const result = drawGroups(mockTeams, { nGroups: 4, groupSize: 2 })
    expect(result.map((g) => g.name)).toEqual(['A', 'B', 'C', 'D'])
  })

  it('não tem times duplicados entre grupos', () => {
    const result = drawGroups(mockTeams, { nGroups: 2, groupSize: 4 })
    const allCodes = result.flatMap((g) => g.teams.map((t) => t.code))
    const unique = new Set(allCodes)
    expect(unique.size).toBe(allCodes.length)
  })

  it('todos os times são distribuídos', () => {
    const result = drawGroups(mockTeams, { nGroups: 2, groupSize: 4 })
    const allCodes = result.flatMap((g) => g.teams.map((t) => t.code))
    expect(allCodes.sort()).toEqual(mockTeams.map((t) => t.code).sort())
  })

  it('lança erro se quantidade de times não bate', () => {
    expect(() => drawGroups(mockTeams, { nGroups: 3, groupSize: 3 })).toThrow()
  })
})
