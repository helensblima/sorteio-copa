import { describe, it, expect, beforeEach } from 'vitest'
import { useDrawStore } from '@/hooks/useDrawStore'
import { saveState, loadState, clearState } from '@/repositories/localStorageRepo'

describe('Persistência: localStorage', () => {
  beforeEach(() => {
    localStorage.clear()
    useDrawStore.setState({
      nGroups: 8,
      groupSize: 4,
      selected: new Set<string>(),
      drawResult: null,
      isDrawing: false,
    })
  })

  it('salva estado no localStorage', () => {
    saveState({
      nGroups: 4,
      groupSize: 3,
      selected: ['BRA', 'ARG', 'FRA'],
      drawResult: null,
    })

    const saved = loadState()
    expect(saved).not.toBeNull()
    expect(saved?.nGroups).toBe(4)
    expect(saved?.groupSize).toBe(3)
    expect(saved?.selected).toEqual(['BRA', 'ARG', 'FRA'])
  })

  it('restaura estado ao carregar', () => {
    saveState({
      nGroups: 6,
      groupSize: 3,
      selected: ['BRA', 'FRA'],
      drawResult: null,
    })

    const saved = loadState()
    if (saved) {
      useDrawStore.setState({
        nGroups: saved.nGroups,
        groupSize: saved.groupSize,
        selected: new Set(saved.selected),
        drawResult: null,
        isDrawing: false,
      })
    }

    const state = useDrawStore.getState()
    expect(state.nGroups).toBe(6)
    expect(state.groupSize).toBe(3)
    expect(state.selected.has('BRA')).toBe(true)
    expect(state.selected.has('FRA')).toBe(true)
    expect(state.selected.size).toBe(2)
  })

  it('limpa estado do localStorage', () => {
    saveState({
      nGroups: 4,
      groupSize: 2,
      selected: ['BRA'],
      drawResult: null,
    })

    clearState()
    const saved = loadState()
    expect(saved).toBeNull()
  })

  it('retorna null se não tem nada salvo', () => {
    const saved = loadState()
    expect(saved).toBeNull()
  })
})