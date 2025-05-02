import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { db } from '../../firebaseConfig';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const productosRef = collection(db, 'productos');

    // Si hay categoría, hacemos query con filtro, si no, traemos todos
    const consulta = categoria
      ? query(productosRef, where('categoria', '==', categoria))
      : productosRef;

    setLoading(true);
    getDocs(consulta)
      .then((snapshot) => {
        const productosFirebase = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodosLosProductos(productosFirebase);
      })
      .catch((err) => console.error('Error al cargar productos:', err))
      .finally(() => setLoading(false));
  }, [categoria]);

  return (
    loading ? (
      <Loader />
    ) : (
      <div>
        <div className='containerProductos'>
          {todosLosProductos.map((producto) => (
            <Item key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    )
  );
}

export default ItemListContainer;
