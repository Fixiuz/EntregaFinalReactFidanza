import React from 'react';
import './Laboratorio.css';

function Laboratorio() {
  return (
    <div className="laboratorio">
      <h1 className="titulo">Nuestro Laboratorio 3D</h1>

      <section className="bloque">
        <div className="bloque-texto">
          <h2>Precisión y Detalle</h2>
          <p>
            Cada pieza nace en nuestro laboratorio equipado con impresoras 3D de alta resolución. Cuidamos hasta el último detalle para lograr acabados limpios y precisos.
          </p>
        </div>
        <div className="bloque-imagen">
          <img src="https://res.cloudinary.com/dwjqk2hcf/image/upload/v1746246910/1714389062589_pffrka.jpg" alt="Impresora 3D trabajando" />
        </div>
      </section>

      <section className="bloque">
        <div className="bloque-imagen">
          <img src="https://res.cloudinary.com/dwjqk2hcf/image/upload/v1746246910/curso-impresion-3D-scaled-e1639480417574_zktxml.jpg" alt="Piezas impresas" />
        </div>
        <div className="bloque-texto">
          <h2>Un espacio ordenado</h2>
          <p>
            Mantenemos un entorno de trabajo prolijo y organizado para asegurar eficiencia y calidad en cada proceso de impresión.
          </p>
        </div>
      </section>

      <section className="bloque">
        <div className="bloque-texto">
          <h2>Calibración profesional</h2>
          <p>
            Realizamos calibraciones periódicas y pruebas técnicas para garantizar resultados consistentes, con materiales de primera calidad.
          </p>
        </div>
        <div className="bloque-imagen">
          <img src="https://res.cloudinary.com/dwjqk2hcf/image/upload/v1746246910/hq720_d8ul3f.jpg" alt="Calibración" />
        </div>
      </section>

      <section className="bloque">
        <div className="bloque-imagen">
          <img src="https://res.cloudinary.com/dwjqk2hcf/image/upload/v1746246911/jgigrzelv7n41_andfcy.webp" alt="Vista general del laboratorio" />
        </div>
        <div className="bloque-texto">
          <h2>Pequeño pero poderoso</h2>
          <p>
            Aunque es un laboratorio doméstico, está optimizado para producir con estándares profesionales. Un espacio donde la tecnología y el diseño se unen.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Laboratorio;
