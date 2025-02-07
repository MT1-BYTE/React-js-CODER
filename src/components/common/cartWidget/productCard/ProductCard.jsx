import "./ProductCard.css";

export const ProductCard = (props) => {
  const { title, price, stock, description } = props;

  return (
    <div className="containerCard">
      <h3>{title}</h3>
      <h3>{price}</h3>
      <h3>{stock}</h3>
      <h3>{description}</h3>
    </div>
  );
};

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
