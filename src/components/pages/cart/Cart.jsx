import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div>
      <h1>Acá va a ir el carrito</h1>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h3>x{product.quantity}</h3>
            <button onClick={() => removeById(product.id)}>
              Eliminar producto
            </button>
          </div>
        );
      })}
      <h2>Total a pagar ${total}</h2>
      <button onClick={resetCart}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
