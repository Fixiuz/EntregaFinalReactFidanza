import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc, serverTimestamp, Timestamp } from "firebase/firestore";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [loadingProductos, setLoadingProductos] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosCollection = collection(db, "productos");
        const snapshot = await getDocs(productosCollection);
        const productosDB = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productosDB);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoadingProductos(false);
      }
    };

    obtenerProductos();
  }, []);

  const agregarAlCarrito = (prod, cantidad) => {
    const nuevoProducto = { ...prod, cantidad };
    if (carrito.some(el => el.id === prod.id)) {
      const nuevoCarrito = carrito.map(el =>
        el.id === prod.id ? { ...el, cantidad: el.cantidad + cantidad } : el
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, nuevoProducto]);
    }
  };

  const vaciarCarrito = () => setCarrito([]);

  const eliminarProducto = (id) =>
    setCarrito(carrito.filter(item => item.id !== id));

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) return;
    setCarrito(carrito.map(item =>
      item.id === id ? { ...item, cantidad: nuevaCantidad } : item
    ));
  };

  
  const crearOrden = async (form, onSuccess, onError) => {
    const orden = {
      comprador: { ...form },
      items: carrito.map(item => ({
        id: item.id,
        nombre: item.nombre,
        cantidad: item.cantidad,
        precio: item.precio
      })),
      total: carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
      fecha: Timestamp.now()
    };

    try {
      const docRef = await addDoc(collection(db, 'ordenes'), orden);
      vaciarCarrito();
      if (onSuccess) onSuccess(docRef.id, orden);
    } catch (error) {
      if (onError) onError(error);
    }
  };

  const buscarProductos = (termino) => {
  return productos.filter(p =>
    p.nombre.toLowerCase().includes(termino.toLowerCase())
  );
};
  
  return (
    <AppContext.Provider value={{
      carrito,
      productos,
      loadingProductos,
      agregarAlCarrito,
      vaciarCarrito,
      actualizarCantidad,
      eliminarProducto,
      crearOrden,
      buscarProductos, 
    }}>
      {props.children}
    </AppContext.Provider>
  );
};
