import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router'
import { TeamsPage } from '@/pages/TeamsPage'
import { useDrawStore } from '@/hooks/useDrawStore'

function renderWithRouter() {
  return render(
    <BrowserRouter>
      <TeamsPage />
    </BrowserRouter>
  )
}

describe('Fluxo: seleção → sorteio', () => {
  beforeEach(() => {
    useDrawStore.setState({
      nGroups: 2,
      groupSize: 2,
      selected: new Set<string>(),
      drawResult: null,
      isDrawing: false,
    })
  })

  it('seleciona times via busca e atualiza contador', async () => {
    const user = userEvent.setup()
    renderWithRouter()

    const search = screen.getByPlaceholderText(/buscar/i)
    await user.type(search, 'Brazil')

    const teamRow = screen.getByRole('checkbox', { name: /brazil/i })
    await user.click(teamRow)

    expect(teamRow).toHaveAttribute('aria-checked', 'true')

    
    const state = useDrawStore.getState()
    expect(state.selected.size).toBe(1)
    expect(state.selected.has('BRA')).toBe(true)
  })

  it('botão de sorteio habilita quando atinge o total', async () => {
    const user = userEvent.setup()
    renderWithRouter()

    const checkboxes = screen.getAllByRole('checkbox')
    await user.click(checkboxes[0])
    await user.click(checkboxes[1])
    await user.click(checkboxes[2])
    await user.click(checkboxes[3])

    const drawButton = screen.getByText(/realizar sorteio/i)
    expect(drawButton).not.toBeDisabled()
  })

  it('bloqueia seleção ao atingir o limite', async () => {
    const user = userEvent.setup()
    renderWithRouter()

    const checkboxes = screen.getAllByRole('checkbox')
    await user.click(checkboxes[0])
    await user.click(checkboxes[1])
    await user.click(checkboxes[2])
    await user.click(checkboxes[3])

    expect(checkboxes[4]).toHaveAttribute('aria-disabled', 'true')
  })
})