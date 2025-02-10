import { ProductCard } from "../../common/cartWidget/productCard/ProductCard";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  let nombreDeUsuario = "Pepe";
  const saludar = () => {
    console.log(nombreDeUsuario);
  };

  return (
    <section>
      <h2>{greeting}</h2>
      {console.log("Hola")}
      <h2>Mis productos</h2>
      <ProductCard
        title="Título 1"
        price="Precio 1"
        stock="Stock 1"
        description="Descripción 1"
      />
      <ProductCard
        title="Título 2"
        price="Precio 2"
        stock="Stock 2"
        description="Descripción 2"
      />
      <ProductCard
        title="Título 3"
        price="Precio 3"
        stock="Stock 3"
        description="Descripción 3"
      />
    </section>
  );
};
