import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1><Link to='/'>MY SHOP</Link></h1>
      <nav>
        <ul>
          <li><NavLink activeclassname='active' to='/'>ALL GOODS</NavLink></li>
          <li><NavLink activeclassname='active' to='/my-bag'>My Bag</NavLink></li>
          <li><NavLink activeclassname='active' to='/admin'>Admin</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
