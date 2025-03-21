import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const funcionFormulario = (evento) => {
    evento.preventDefault();
    console.log(userInfo);
    // En este momento es cuando nos conectamos con backend para realizar peticiones.
  };

  const funcionInputs = (evento) => {
    const { value, name } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
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
    </div>
  );
};

export default Checkout;
