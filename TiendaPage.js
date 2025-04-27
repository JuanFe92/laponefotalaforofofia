import React from 'react';
import ItemCard from './ItemCard';
import './TiendaPage.css'; // Importa estilos de la tienda
const items = [
  { id: 1, name: 'Item 1', imageUrl: 'URL_IMAGEN_1', price: 20 },
  { id: 2, name: 'Item 2', imageUrl: 'URL_IMAGEN_2', price: 25 },
  { id: 3, name: 'Item 3', imageUrl: 'URL_IMAGEN_3', price: 30 },
  { id: 4, name: 'Item 4', imageUrl: 'URL_IMAGEN_4', price: 15 },
  { id: 5, name: 'Item 5', imageUrl: 'URL_IMAGEN_5', price: 40 },
  { id: 6, name: 'Item 6', imageUrl: 'URL_IMAGEN_6', price: 18 },
  { id: 7, name: 'Item 7', imageUrl: 'URL_IMAGEN_7', price: 22 },
  { id: 8, name: 'Item 8', imageUrl: 'URL_IMAGEN_8', price: 35 },
  { id: 9, name: 'Item 9', imageUrl: 'URL_IMAGEN_9', price: 28 },
  { id: 10, name: 'Item 10', imageUrl: 'URL_IMAGEN_10', price: 12 },
  { id: 11, name: 'Item 11', imageUrl: 'URL_IMAGEN_11', price: 45 },
  { id: 12, name: 'Item 12', imageUrl: 'URL_IMAGEN_12', price: 19 },
];
function TiendaPage({ addToCart }) {
  return (
    <div className="tienda-page">
      <div className="items-grid">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
export default TiendaPage;
