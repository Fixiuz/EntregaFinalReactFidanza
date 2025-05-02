import './Item.css';
import { Link } from 'react-router-dom'; // Asegúrate de usar 'react-router-dom'
import { useAppContext } from '../../context/context';

function Item({ producto }) {
  const { id, nombre, precio, stock, img } = producto;
  const { agregarAlCarrito } = useAppContext();

  return (
    <div className='productos'>
      <h2>{nombre}</h2>
      <img src={img} alt={nombre} />
      <p>${precio}</p>
      <p>Quedan {stock} disponibles</p>
      <button className='btn' onClick={() => agregarAlCarrito(producto, 1)}>
        Agregar al carrito
      </button>
      <Link to={`/detalle/${id}`}>
        <button className='btn'>Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;