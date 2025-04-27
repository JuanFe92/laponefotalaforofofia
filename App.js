import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import TiendaPage from './TiendaPage';
import CheckoutPage from './CheckoutPage';
import Header from './Header';
import './App.css'; // Importa estilos globales
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity = Math.min(
        updatedCartItems[existingItemIndex].quantity + item.quantity,
        100
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: Math.min(item.quantity, 100) }]);
    }
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <nav className="main-nav">
          <Link to="/tienda">Tienda</Link>
          <Link to="/checkout">Checkout ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tienda" element={<TiendaPage addToCart={addToCart} />} />
          <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;