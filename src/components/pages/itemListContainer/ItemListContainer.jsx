import { useEffect, useState } from "react";
import { products } from "../../../products";
import "./ItemListContainer.css";
import { ProductCard } from "../../common/cartWidget/productCard/ProductCard";
import { useParams } from "react-router";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { name } = useParams();

  // Undefined ---> Home ---> Ver todos los productos
  // String ---> Categoría ---> Filtrar los productos

  useEffect(() => {
    let productosFiltrados = products.filter(
      (elemento) => elemento.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let isAdmin = true;
      if (isAdmin) {
        resolve(name ? productosFiltrados : products);
      } else {
        reject({ message: "Todo salió mal", status: 400 });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <section>
      <h2>{greeting}</h2>
      <h2>Mis productos</h2>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

/*
  fetch() es una función que nos permite hacer peticiones HTTP a un servidor. Se usa cuando queremos obtener datos de una API, enviar información o interactuar con bases de datos en la web.

  Cuando llamamos a fetch(), JavaScript no obtiene inmediatamente la respuesta. En su lugar, devuelve una Promesa, que es un objeto especial que representa un "valor futuro".

  Una Promesa en JavaScript significa que el código no se ejecuta de inmediato, sino que espera la respuesta del servidor antes de continuar.

  📌 El callback está dentro de new Promise().

  Creamos una promesa (new Promise(...))

  La promesa recibe una función callback con dos parámetros: resolve y reject.
  Nunca se ejecutan ambas, una u otra.
  Esta función es ejecutada automáticamente cuando se crea la promesa.

  Dependiendo de si la promesa se resuelve o se rechaza, se ejecutará el método .then() o .catch().
*/
