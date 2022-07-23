import { NavLink, Outlet } from 'react-router-dom'
import s from './Navigation.module.scss'

export default function Navigation() {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink
          to="redux"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          Redux Stopwatch
        </NavLink>
        <NavLink
          to="react-hooks"
          className={({ isActive }) => (isActive ? s.active : s.item)}
        >
          React Hooks Stopwatch
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}
