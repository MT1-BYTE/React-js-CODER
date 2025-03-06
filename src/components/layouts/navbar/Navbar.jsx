import { CartWidget } from "../../common/cartWidget/cartWidget/CartWidget";
import "./navbar.css";
import logo from "../../../assets/images/sportive.png";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img className="imgLogo" src={logo} alt="" />
      </Link>
      <h1 className="navbarTitle">Mi tienda deportiva</h1>
      <ul className="navbarMenu">
        <Link to={"/category/calzado"}>Calzado</Link>
        <Link to={"/category/indumentaria"}>Indumentaria</Link>
        <Link to={"/category/accesorios"}>Accesorios</Link>
      </ul>
      <Link to="/cart">
        <CartWidget className="cartWidget" />
      </Link>
    </nav>
  );
};
