import { Outlet } from 'react-router'
import './styles.scss'
import { Header } from '@/components'

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* footer */}
    </>
  )
}
