import { describe, it, expect } from 'vitest'
import { normalizeSearch } from './normalizeSearch'

describe('normalizeSearch', () => {
  it('converte para lowercase', () => {
    expect(normalizeSearch('BRAZIL')).toBe('brazil')
  })

  it('remove acentos', () => {
    expect(normalizeSearch('França')).toBe('franca')
  })

  it('funciona com código de país', () => {
    expect(normalizeSearch('BRA')).toBe('bra')
  })

  it('retorna vazio para string vazia', () => {
    expect(normalizeSearch('')).toBe('')
  })
})
