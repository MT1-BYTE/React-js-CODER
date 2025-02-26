import "./ProductCard.css";

export const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <img src={item.imageUrl} alt={item.title} />
      <h2 className="productTitle">{item.title}</h2>
      <p className="productPrice">${item.price}</p>
    </div>
  );
};

/*
<ProductCard
  title="Título 1"
  price="Precio 1"
  stock="Stock 1"
  description="Descripción 1"
/>;
<ProductCard
  title="Título 2"
  price="Precio 2"
  stock="Stock 2"
  description="Descripción 2"
/>;
<ProductCard
  title="Título 3"
  price="Precio 3"
  stock="Stock 3"
  description="Descripción 3"
/>;
*/
