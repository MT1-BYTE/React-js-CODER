import { useContext, useState } from "react"; //Estamos importando el Hook useState desde React.
import { CartContext } from "../../../../context/CartContext";

const Counter = ({ item }) => {
  const [contador, setContador] = useState(1); // Valor inicial del contador
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (item.stock > contador) {
      setContador(contador + 1);
    } else {
      alert("Sin stock");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let objeto = { ...item, quantity: contador };
    addToCart(objeto);
  };

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;

/*  
    Un estado en React es básicamente  una variable que, cuando cambia, hace que el componente se vuelva a renderizar con el nuevo valor.

    const [contador, funcionContador] → Desestructura useState en dos partes:

    contador → Es la variable de estado, almacena el valor actual (inicialmente 0).
    funcionContador → Es la función que actualiza el estado.

    No hay forma de cambiar el valor de una variable si no es a través de su función.

    Cada vez que el usuario presiona el botón, se incrementa el estado y el componente se renderiza nuevamente mostrando el nuevo valor.

    1) useState(0) → Crea un estado llamado contador, iniciando en 0.
    2) funcionContador(nuevoValor) → Permite actualizar el estado con un nuevo valor.
    3) Cada vez que el estado cambia, React vuelve a renderizar el componente.
    4) El botón llama a la función sumar(), que incrementa el contador.
    5) Se muestra el estado actualizado en la interfaz de usuario.
*/

/*
    Ciclos de vida de un componente en React:

    1️⃣ Montaje → Cuando el componente se crea y se renderiza en el DOM por primera vez.
    2️⃣ Actualización → Cuando el componente ya está montado y cambia su estado (useState) o sus props, provocando que se re-renderice.
    3️⃣ Desmontaje → Cuando el componente deja de existir en la pantalla y se elimina del DOM.

    - Fase de Montaje:
    En esta etapa, el componente se crea y se muestra en la interfaz.

    - Fase de Actualización:
    Un componente se vuelve a ejecutar cada vez que su estado cambia o recibe nuevas props.

    Por ejemplo, en un carrito de compras, al hacer clic en "Sumar", el número de unidades aumenta, lo que provoca una actualización.

    Cada actualización vuelve a ejecutar todo el código dentro del componente, lo que puede ser problemático si hay peticiones innecesarias o código que no queremos repetir en cada cambio.

    - Fase de Desmontaje:
    Ocurre cuando el componente deja de existir en la interfaz.

    -useEffect(() => {}, []):
    Cuando el componente se monta en el DOM, se ejecuta el código dentro de useEffect.
    Como el array de dependencias está vacío [], React no volverá a ejecutar el efecto nunca más, ni cuando el estado (contador) cambie, ni cuando se re-renderice el componente.
    
    En este caso, solo aparecerá el mensaje en la consola una vez.

    ¿Por qué es útil useEffect()?

    A veces voy a realizar una petición a un servidor cuando el componente se carga por primera vez, por ejemplo, para traer productos de una tienda online. No quiero que esa petición se haga cada vez que el usuario cambie un número en el contador, ya que eso generaría llamadas innecesarias al servidor.

    Por eso, utilizo useEffect(() => {...}, []) cuando quiero ejecutar algo una sola vez en el montaje del componente.

    El montaje del useEffect siempre se ejecuta después de que el componente ha sido renderizado en el DOM.
*/
