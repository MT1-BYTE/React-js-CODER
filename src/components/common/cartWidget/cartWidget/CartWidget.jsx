import { useContext } from "react";
import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <div className="cart-container">
      <FaShoppingCart className="cart-icon" />
      <h3 className="item-count">{total}</h3>
    </div>
  );
};
