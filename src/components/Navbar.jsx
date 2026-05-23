import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  return (
    <header className="navbar">

      <h1>Vitta App</h1>

      <nav>

        <Link to="/register">
          Cadastro
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/">
          Sair
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;