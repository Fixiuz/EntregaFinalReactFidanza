import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Cart.css';

function Cart() {
  const { carrito, vaciarCarrito, eliminarProducto, actualizarCantidad } = useAppContext();
  const navigate = useNavigate();

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <>
          <p>El carrito está vacío.</p>
          <Link to="/" className="seguir-comprando-btn">Volver al inicio</Link>
        </>
      ) : (
        <>
          <ul className="cart-list">
            {carrito.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.img} alt={item.nombre} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.nombre}</h4>
                  <p>{item.descripcion}</p>
                  <p>Precio unitario: ${item.precio}</p>
                  <label>Cantidad: </label>
                  <input
                    type="number"
                    min="1"
                    value={item.cantidad}
                    onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value))}
                    className="cart-cantidad-input"
                  />
                  <p>Subtotal: ${item.precio * item.cantidad}</p>
                  <button onClick={() => eliminarProducto(item.id)} className="eliminar-btn">
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <div className="cart-buttons">
            <Link to="/" className="seguir-comprando-btn">Seguir comprando</Link>
            <button onClick={() => navigate('/checkout')} className="finalizar-compra-btn">
              Finalizar compra
            </button>
            <button onClick={vaciarCarrito} className="vaciar-btn">Vaciar Carrito</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
