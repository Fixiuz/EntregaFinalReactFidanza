
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router';
import fetchData from '../../fetchData';
import Loader from '../Loader/Loader';


function ItemDetail(){
    
    const { id } = useParams();
    // console.log(producto);
  
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null);
    const [contador, setContador] = useState(1); 
    // const {nombre,precio,descripcion,stock,categoria} = producto;
    
    
    function agregarAlCarrito(prod){
        const nuevoProducto = {
            ...prod,
            cantidad:contador,
        };
        console.log('Vas a agregar ', nuevoProducto);
        setContador(1);
        
    };
    

    useEffect(()=>{
        fetchData()
        .then(response => {
            
            const productoAMostrar = response.find(el => el.id === parseInt(id));
            setProducto(productoAMostrar);

            // console.log(parseInt(id));
            // setTodosLosProductos(response);
              
            setTimeout(() => {
                setLoading(false);
            }, 500); 
            


        }) 
        .catch(error => console.error(error))
    },[]);    
    return (
        loading ?
            <Loader />

            :
            
            <div className='productosDetail'>
                
                <h2>{producto.nombre}</h2>
                
                <div className='imagenDetail'>
                    <img src={`/assets/Imgs/${producto.img}`} alt={producto.nombre} />
                </div>
                <p>{producto.descripcion}</p>
                <p>Precio: <b>${producto.precio}</b></p>
                <p>Categoria : {producto.categoria}</p>
                
                
                <p>Quedan {producto.stock} disponibles</p>                
                <ItemCount stock = {producto.stock} contador = {contador} setContador = {setContador}/>   
                <button className='btn' onClick={()=> agregarAlCarrito(producto)}>Agregar al carrito</button>
                <Link to={'/'}>
                    <button className='btn'>Volver al incio </button>
                </Link>
            </div> 
    );
  };
export default ItemDetail