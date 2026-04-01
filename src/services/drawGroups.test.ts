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
  it('should create the correct number of groups', () => {
    const result = drawGroups(mockTeams, { nGroups: 2, groupSize: 4 })
    expect(result).toHaveLength(2)
  })

  it('should ensure each group has the correct size', () => {
    const result = drawGroups(mockTeams, { nGroups: 4, groupSize: 2 })
    result.forEach((group) => {
      expect(group.teams).toHaveLength(2)
    })
  })

  it('should assign sequential letters as group names', () => {
    const result = drawGroups(mockTeams, { nGroups: 4, groupSize: 2 })
    expect(result.map((g) => g.name)).toEqual(['A', 'B', 'C', 'D'])
  })

  it('should not have duplicate teams across groups', () => {
    const result = drawGroups(mockTeams, { nGroups: 2, groupSize: 4 })
    const allCodes = result.flatMap((g) => g.teams.map((t) => t.code))
    const unique = new Set(allCodes)
    expect(unique.size).toBe(allCodes.length)
  })

  it('should distribute all provided teams', () => {
    const result = drawGroups(mockTeams, { nGroups: 2, groupSize: 4 })
    const allCodes = result.flatMap((g) => g.teams.map((t) => t.code))
    const mockCodes = mockTeams.map((t) => t.code)
    expect(allCodes.sort()).toEqual(mockCodes.sort())
  })

  it('should throw an error if the number of teams does not match', () => {
    expect(() => drawGroups(mockTeams, { nGroups: 3, groupSize: 3 })).toThrow()
  })
})
