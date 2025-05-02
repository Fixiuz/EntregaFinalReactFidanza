import './CartWidget.css'
import { TbShoppingCart } from "react-icons/tb";
import React  from 'react';
import { useAppContext } from '../../context/context';
import { Link } from 'react-router-dom';


function CartWidget(){
  const { numero, carrito, vaciarCarrito } = useAppContext();
    
    return (
      
      <div className='cart'>
        <TbShoppingCart /><p>{carrito.length }</p>
        <Link to="/carrito" className="ver-carrito-btn">
          Ver Carrito
        </Link>

      </div>
      
    );  
}
export default CartWidget