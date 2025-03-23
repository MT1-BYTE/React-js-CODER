import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ProductCard } from "../../common/cartWidget/productCard/ProductCard";
import { useParams } from "react-router";
import { dataBase } from "../../../firebaseConfig";

import { collection, addDoc, getDocs } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    let refCollection = collection(dataBase, "products");
    const getProducts = getDocs(refCollection);
    getProducts
      .then((res) => {
        const nuevoArray = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(nuevoArray);
      })
      .catch((error) => console.log(error));
  }, [name]);

  //const cargar = () => {
  //  let refCollection = collection(dataBase, "products");
  //  products.forEach((product) => {
  //    addDoc(refCollection, product);
  //  });
  //};

  return (
    <section>
      <h2>{greeting}</h2>
      {/* <button onClick={cargar}>Cargar productos</button> */}
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
