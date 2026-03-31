import { Route, Routes } from 'react-router'
import { Layout } from '@/components'
import { HomePage, ConfigPage, TeamsPage } from '@/pages'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='configuracao-sorteio' element={<ConfigPage />} />
        <Route path='escolha-selecoes' element={<TeamsPage />} />
        <Route path='resultado-sorteio' element={<h1>Resultado do Sorteio </h1>} />
      </Route>
    </Routes>
  )
}
