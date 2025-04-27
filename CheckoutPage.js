import React from 'react';
import './CheckoutPage.css'; // Importa estilos del checkout
function CheckoutPage({ cartItems }) {
  if (cartItems.length === 0) {
    return <div className="checkout-page">Tu carrito está vacío.</div>;
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <ul className="cart-items-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio por unidad: ${item.price}</p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        Total: $
        {cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)}
      </div>
      <button type="button">Finalizar Compra</button>
    </div>
  );
}
export default CheckoutPage;