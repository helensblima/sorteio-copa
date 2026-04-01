import { Outlet } from 'react-router'
import { Header } from '@/components'
import './styles.scss'

export function Layout() {
  return (
    <>
      <Header />
      <main className='layout__content'>
        <Outlet />
      </main>
    </>
  )
}
