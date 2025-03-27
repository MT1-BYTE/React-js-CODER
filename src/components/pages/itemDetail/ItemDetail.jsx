import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Counter from "../../common/cartWidget/counter/Counter";
import { dataBase } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let refCollection = collection(dataBase, "products");
    let refDoc = doc(refCollection, id);
    const getProduct = getDoc(refDoc);
    getProduct
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="itemDetailContainer">
      {/* Imagen a la izquierda (2/3 del ancho) */}
      <div className="imageContainer">
        <img src={item.imageUrl} alt={item.title} className="productImage" />
      </div>

      {/* Contenido a la derecha (1/3 del ancho) */}
      <div className="infoContainer">
        <p className="pickupMessage">¡Retirá gratis ya!</p>
        <h1 className="productTitleDetail">{item.title}</h1>
        <p className="productPriceDetail">${item.price}</p>
        <p className="productDescriptionDetail">{item.description}</p>

        {/* Sección de promociones */}
        <div className="promoContainer">
          <p className="promoText">Aprovechá nuestras promos bancarias</p>
          <div className="promoIcons">
            <img src="/src/assets/images/visa.png" alt="Visa" />
            <img src="/src/assets/images/mastercard.png" alt="Mastercard" />
            <img src="/src/assets/images/cabal.png" alt="Cabal" />
            <img src="/src/assets/images/naranjax.png" alt="NaranjaX" />
          </div>
        </div>

        {/* Contador y botón de agregar al carrito */}
        <Counter item={item} />
      </div>
    </div>
  );
};

export default ItemDetail;
