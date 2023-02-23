import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="Nav-Bar">
      <div>
        <NavLink className="Nav-Link" to="/">
          Home
        </NavLink>
        <NavLink className="Nav-Link" to="/RidesForm">
          Add a Ride!
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
