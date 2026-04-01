import type { DrawResult } from '@/types'

const STORAGE_KEY = 'copa-game'

interface StorageData {
  nGroups: number
  groupSize: number
  selected: string[]
  drawResult: DrawResult | null
}

export function saveState(data: StorageData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.error('Erro ao salvar:', e)
  }
}

export function loadState(): StorageData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (e) {
    console.error('Erro ao carregar:', e)
    return null
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (e) {
    console.error('Erro ao limpar:', e)
  }
}
