
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer texto="Bienvenid@s a la Tienda del Café!" />
    </div>
  );
}




export default App;
