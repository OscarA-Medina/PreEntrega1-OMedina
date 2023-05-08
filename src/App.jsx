
import './App.css';
import React from "react";
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './context/CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>  
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          </Routes> 
        </CartProvider>
             
      </BrowserRouter>
      
    </div>
  );
}




export default App;
