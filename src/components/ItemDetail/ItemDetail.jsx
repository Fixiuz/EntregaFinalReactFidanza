import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';

function ItemDetail({ producto }) {
  const [contador, setContador] = useState(1);
  const { agregarAlCarrito } = useAppContext();

  // Si no se ha recibido el producto aún, muestra un mensaje de carga
  if (!producto) return <p>Cargando detalle del producto...</p>;

  return (
    <div className='productosDetail'>
      <h2>{producto.nombre}</h2>
      <div className='imagenDetail'>
        <img src={producto.img} alt={producto.nombre} />
      </div>
      <p>{producto.descripcion}</p>
      <p>Precio: <b>${producto.precio}</b></p>
      <p>Categoría: {producto.categoria}</p>
      <p>Quedan {producto.stock} disponibles</p>

      <ItemCount
        stock={producto.stock}
        contador={contador}
        setContador={setContador}
      />

      <button className='btn' onClick={() => agregarAlCarrito(producto, contador)}>
        Agregar al carrito
      </button>

      <Link to='/'>
        <button className='btn'>Volver al inicio</button>
      </Link>
    </div>
  );
}

export default ItemDetail;