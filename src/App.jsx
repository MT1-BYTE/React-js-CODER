import { Footer } from "./components/layouts/footer/Footer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layouts/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola, te damos la bienvenida!" />
      <Footer />
    </div>
  );
}

export default App;
