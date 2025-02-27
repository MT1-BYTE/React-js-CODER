import { Footer } from "./components/layouts/footer/Footer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import Counter from "./components/common/cartWidget/counter/Counter";
import { useState } from "react";
//import Users from "./components/Users";
import Comments from "./components/Comments";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  console.log(darkMode);

  return (
    <div>
      {/*<Users />*/}
      {/*<Comments />*/}
      <button onClick={changeMode}>Cambiar modo</button>
      <Navbar />
      <ItemListContainer greeting="Hola, te damos la bienvenida!" />
      <Counter darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
