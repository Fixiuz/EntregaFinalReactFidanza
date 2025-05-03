import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './CheckoutForm.css';

function CheckoutForm() {
  const { crearOrden } = useAppContext();
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    crearOrden(form,
      (ordenId, orden) => {
        navigate(`/factura/${ordenId}`, { state: { ordenId, orden } });
      },
      (error) => {
        console.error('Error al guardar la orden:', error);
        alert('Hubo un error al guardar la orden.');
      }
    );
  };

  return (
    <div className="checkout-form-container">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>Nombre:</label>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Teléfono:</label>
        <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} required />

        <button type="submit" className="confirmar-btn">Confirmar compra</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
