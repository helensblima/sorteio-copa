import { Route, Routes } from 'react-router'
import { Layout } from '@/components'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path='configuracao-sorteio' element={<h1>Configure o Sorteio</h1>} />
        <Route path='escolha-selecoes' element={<h1>Escolha os países</h1>} />
        <Route path='resultado-sorteio' element={<h1>Resultado do Sorteio </h1>} />
      </Route>
    </Routes>
  )
}
