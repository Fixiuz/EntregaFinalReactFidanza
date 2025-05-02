import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import './Factura.css';

function Factura() {
  const location = useLocation();
  const { ordenId, orden } = location.state || {};

  const generarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Factura de compra', 20, 20);
    doc.setFontSize(12);
    doc.text(`ID de orden: ${ordenId}`, 20, 30);
    doc.text(`Nombre: ${orden.comprador.nombre}`, 20, 40);
    doc.text(`Email: ${orden.comprador.email}`, 20, 50);
    doc.text(`Teléfono: ${orden.comprador.telefono}`, 20, 60);

    let y = 80;
    orden.items.forEach((item, index) => {
      doc.text(`${item.nombre} - ${item.cantidad} x $${item.precio}`, 20, y);
      y += 10;
    });

    doc.text(`Total: $${orden.total}`, 20, y + 10);
    doc.save(`factura_${ordenId}.pdf`);
  };

  if (!orden) {
    return <p>No se encontró la orden.</p>;
  }

  return (
    <div className="factura-container">
      <h2>¡Gracias por tu compra!</h2>
      <p>ID de Orden: <b>{ordenId}</b></p>
      <p>Nombre: {orden.comprador.nombre}</p>
      <p>Email: {orden.comprador.email}</p>
      <p>Teléfono: {orden.comprador.telefono}</p>

      <h3>Productos:</h3>
      <ul>
        {orden.items.map((item) => (
          <li key={item.id}>
            {item.nombre} - {item.cantidad} x ${item.precio}
          </li>
        ))}
      </ul>

      <h3>Total: ${orden.total}</h3>

      <button className="btn-descargar" onClick={generarPDF}>
        Descargar factura en PDF
      </button>

      <Link to="/"><button className="btn-volver">Volver al inicio</button></Link>
    </div>
  );
}

export default Factura;
