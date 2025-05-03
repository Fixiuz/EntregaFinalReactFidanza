import React from 'react';
import './QuienesSomos.css';

function QuienesSomos() {
  return (
    <div className="quienes-somos">
      <div className="quienes-somos-bloque">
        <div className="qs-texto">
          <h2>Nuestros Inicios</h2>
          <p>
            Nuestro emprendimiento nació en plena pandemia, cuando el mundo se detuvo y las ideas comenzaron a tomar forma. Un pequeño grupo de personas con espíritu inquieto y creativo decidió transformar el tiempo y la incertidumbre en una oportunidad.
          </p>
        </div>
        <div className="qs-imagen">
          <img src="https://res.cloudinary.com/dwjqk2hcf/image/upload/v1746246911/3ddd_qzvwsh.png" alt="Inicios del proyecto" />
        </div>
      </div>

      <div className="quienes-somos-bloque">
        <div className="qs-imagen">
          <img src="https://res.cloudinary.com/dwjqk2hcf/image/upload/v1746246910/Laboratorio3d1_x4um2s.png" alt="Equipo de trabajo" />
        </div>
        <div className="qs-texto">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un equipo chico, pero ambicioso, enfocado en el diseño y producción de soluciones prácticas para la vida cotidiana y el hogar. También desarrollamos productos personalizados y merchandising con tecnología de impresión 3D.
          </p>
        </div>
      </div>

      <div className="quienes-somos-bloque">
        <div className="qs-texto">
          <h2>Miras al Futuro</h2>
          <p>
            Creemos en el poder de la creatividad como motor de cambio. Nuestra visión es seguir creciendo, explorando nuevas tecnologías, y acercar nuestros productos a más personas, siempre con la calidad y el compromiso que nos caracteriza.
          </p>
        </div>
        <div className="qs-imagen">
          <img src="https://res.cloudinary.com/dwjqk2hcf/image/upload/v1746246910/granja3d_lwk7px.jpg" alt="Futuro del emprendimiento" />
        </div>
      </div>
    </div>
  );
}

export default QuienesSomos;
