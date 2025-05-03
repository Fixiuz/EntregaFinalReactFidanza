import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/context';
import { useLocation, Link } from 'react-router-dom';
import './CartSidebar.css';

function CartSidebar() {
  const [hasOpened, setHasOpened] = useState(false);
  const { carrito, actualizarCantidad, eliminarProducto } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    // Si entro a la ruta /carrito, cierro el sidebar
    if (['/carrito', '/laboratorio', '/quienesSomos', '/contacto'].includes(location.pathname)) {
      setHasOpened(false);
      return;
    }

    // Si hay productos y nunca se abrió, lo abro
    if (carrito.length > 0 && !hasOpened) {
      setHasOpened(true);
    }
  }, [carrito, hasOpened, location.pathname]);

  if (!hasOpened || carrito.length === 0) return null;

  return (
    <div className={`cart-sidebar ${hasOpened ? 'open' : ''}`}>
      <h4>Resumen del Carrito</h4>
      <ul>
        {carrito.map(item => (
          <li key={item.id} className="cart-sidebar-item">
            <img src={item.img} alt={item.nombre} className="mini-img" />
            <div>
              <p>{item.nombre}</p>
              <p>
                <button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>-</button>
                <span style={{ margin: '0 8px' }}>{item.cantidad}</span>
                <button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</button>
                x ${item.precio} = ${item.cantidad * item.precio}
              </p>
              <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Link to="/carrito">
          <button className="ver-carrito">Ver carrito completo</button>
        </Link>
      </div>
    </div>
  );
}

export default CartSidebar;
