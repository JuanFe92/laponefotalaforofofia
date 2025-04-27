import React, { useState } from 'react';
import './ItemCard.css'; // Importa estilos de la tarjeta del item
function ItemCard({ item, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(Math.min(quantity + 1, 100));
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...item, quantity });
      setQuantity(0); // Reset quantity after adding to cart
    }
  };

  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <div className="quantity-control">
        <button type="button" onClick={handleIncrement}>+</button>
        <span>{quantity}</span>
      </div>
      <button type="button" onClick={handleAddToCart} disabled={quantity === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}
export default ItemCard;