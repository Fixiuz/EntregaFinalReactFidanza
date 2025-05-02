import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MySidebar from './components/Sidebar/Sidebar';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ContextProvider } from './context/context';
import CartSidebar from './components/CartSidebar/CartSidebar';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import Factura from './components/Factura/Factura';




const listaPrueba = []



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  return (

      <ContextProvider>
      <BrowserRouter>
      <NavBar toggleSidebar={toggleSidebar} /> 
        <div className="main-content">
          <MySidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
          <CartSidebar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/factura/:id" element={<Factura />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes> 
        </div>
        <Footer/>
      </BrowserRouter> 
      </ContextProvider>

    
  )
}



export default App
