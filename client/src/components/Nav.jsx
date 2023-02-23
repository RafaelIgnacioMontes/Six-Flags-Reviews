import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav-Bar">
      <div>
        <NavLink className="Nav-Link" to="/">
          Home
        </NavLink>
        <NavLink className="Nav-Link" to="/Rides">
          Rides
        </NavLink>
        <NavLink className="Nav-Link" to="/Reviews">
          Reviews
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
