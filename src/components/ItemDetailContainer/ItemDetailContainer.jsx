import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

function ItemDetailContainer() {
  const { id } = useParams(); // Obtener el ID de la URL
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getProducto = async () => {
      try {
        console.log("ID recibido desde useParams:", id); // Verificar el ID recibido
        const productosRef = collection(db, 'productos'); // Referencia a la colección
        const q = query(productosRef, where('id', '==', id)); // Buscar por el campo `id` mucho muy importante.
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const productoData = snapshot.docs[0].data(); // Obtener el primer documento encontrado
          console.log("Producto encontrado:", productoData); // Verificar los datos del producto
          setProducto({ id: snapshot.docs[0].id, ...productoData }); // Almacenar el producto
        } else {
          console.error("❌ No se encontró el producto con el ID:", id);
        }
      } catch (error) {
        console.error("❌ Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducto(); // Llamar a la función de obtención del producto
  }, [id]);

  return loading ? <Loader /> : <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;