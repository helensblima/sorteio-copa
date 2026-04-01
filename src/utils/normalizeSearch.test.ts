import { describe, it, expect } from 'vitest'
import { normalizeSearch } from './normalizeSearch'

describe('normalizeSearch', () => {
  it('should convert the string to lowercase', () => {
    expect(normalizeSearch('BRAZIL')).toBe('brazil')
  })

  it('should remove accents and special characters', () => {
    expect(normalizeSearch('Mêxico')).toBe('mexico')
    expect(normalizeSearch('França')).toBe('franca')
  })

  it('should work correctly with country codes', () => {
    expect(normalizeSearch('BRA')).toBe('bra')
  })

  it('should return an empty string when input is empty', () => {
    expect(normalizeSearch('')).toBe('')
  })

  it('should handle strings with only whitespace', () => {
    expect(normalizeSearch('   ')).toBe('')
  })
})
