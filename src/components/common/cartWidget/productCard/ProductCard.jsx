import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
  return (
    <div className="productCardContainer">
      <div className="productCard">
        <Link to={`/itemDetail/${item.id}`}>
          <img src={item.imageUrl} alt={item.title} />
          <h2 className="productTitle">{item.title}</h2>
        </Link>
        <p className="productPrice">${item.price}</p>
      </div>
    </div>
  );
};
