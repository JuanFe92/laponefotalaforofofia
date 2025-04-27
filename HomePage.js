import React from 'react';
import './HomePage.css'; // Importa estilos de la página principal
function HomePage() {
  const backgroundImageStyle = {
    backgroundImage: `url('URL_DE_TU_IMAGEN_DE_FONDO')`, // Reemplaza con la URL de tu imagen
  };
return (
    <div className="home-page" style={backgroundImageStyle}>
      <div className="description">
        <p>
          Bienvenido a mi galería. Aquí encontrarás una selección de mis trabajos y también podrás visitar nuestra tienda para adquirir algunos de ellos. ¡Explora y disfruta!
        </p>
      </div>
    </div>
  );
}
export default HomePage;