import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
export const CartWidget = () => {
  return (
    <div className="cart-container">
      <FaShoppingCart className="cart-icon" />
      <h3 className="item-count">2</h3>
    </div>
  );
};
