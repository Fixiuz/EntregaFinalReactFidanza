import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MySidebar from './components/Sidebar/Sidebar';

import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




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
    <>
      <BrowserRouter>
      <NavBar toggleSidebar={toggleSidebar} /> 
        <div className="main-content">
          <MySidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          </Routes> 
        </div>
        <Footer/>
      </BrowserRouter> 

    </>
  )
}



export default App
