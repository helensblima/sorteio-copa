import { Outlet } from 'react-router'
import './styles.scss'

export function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
    </div>
  )
}
