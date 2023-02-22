import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <h4>Six Flags Great Adventure in Jackson Township, New Jersey</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Rides">Rides</NavLink>
        <NavLink to="/Reviews">Reviews</NavLink>
      </div>
    </nav>
  )
}

export default Nav
