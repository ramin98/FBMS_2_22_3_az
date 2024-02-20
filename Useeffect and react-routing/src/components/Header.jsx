import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <ul>
          <li><NavLink activeclassname='active' to='/'>Main</NavLink></li>
          <li><NavLink activeclassname='active' to='/my-bag'>My Bag</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
