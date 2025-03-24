import { useContext, useState } from "react";
import { dataBase } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const funcionFormulario = (evento) => {
    evento.preventDefault();
    let total = getTotalAmount();
    let ordersCollection = collection(dataBase, "orders");
    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let promesaCompra = addDoc(ordersCollection, order);
    promesaCompra.then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(dataBase, "products");

    order.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  const funcionInputs = (evento) => {
    const { value, name } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      {orderId ? (
        <h2>Número de compra {orderId}</h2>
      ) : (
        <form onSubmit={funcionFormulario}>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={funcionInputs}
          />
          <input
            type="text"
            placeholder="Apellido"
            name="apellido"
            onChange={funcionInputs}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={funcionInputs}
          />
          <input
            type="text"
            placeholder="Teléfono"
            name="telefono"
            onChange={funcionInputs}
          />
          <button>Enviar</button>
          <button type="button">Cancelar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
