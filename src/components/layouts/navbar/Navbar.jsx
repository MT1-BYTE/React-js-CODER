import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav>
      <h1>Mi tienda deportiva</h1>
      <ul>
        <li>Home</li>
        <li>Categoría 1</li>
        <li>Categoría 2</li>
        <li>Categoría 3</li>
        <li>Categoría 4</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
