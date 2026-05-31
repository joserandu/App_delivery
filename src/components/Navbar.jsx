import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/restaurants">Restaurantes</Link>
        </li>

        <li>
          <Link to="/dishes">Pratos</Link>
        </li>

        <li>
          <Link to="/orders">Pedidos</Link>
        </li>
        <li>
          <Link to="/About">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;