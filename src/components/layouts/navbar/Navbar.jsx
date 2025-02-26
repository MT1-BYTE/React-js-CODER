import { CartWidget } from "../../common/cartWidget/cartWidget/CartWidget";
import "./navbar.css";
import logo from "../../../assets/images/logo.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="imgLogo" src={logo} alt="" />
      <h1 className="navbarTitle">Mi tienda deportiva</h1>
      <ul className="navbarMenu">
        <li>Home</li>
        <li>Categoría 1</li>
        <li>Categoría 2</li>
        <li>Categoría 3</li>
        <li>Categoría 4</li>
      </ul>
      <CartWidget className="cartWidget" />
    </nav>
  );
};
