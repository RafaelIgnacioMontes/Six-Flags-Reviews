import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <h4>Six Flags Great Adventure in Jackson Township, New Jersey</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/RidesForm">Add a Ride!!</NavLink>
      </div>
    </nav>
  )
}

export default Nav
