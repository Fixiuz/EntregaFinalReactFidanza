import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaHome, FaLaptop, FaTshirt, FaCouch, FaBasketballBall, FaPuzzlePiece } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css'; // Asegúrate que este archivo esté, después lo adaptamos si querés

function MySidebar({ isSidebarOpen, closeSidebar }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Sidebar
      backgroundColor="#ffffff"
      width="250px"
      collapsed={false}
      toggled={isSidebarOpen}
      breakPoint="md"
      style={{
        height: '100vh',
        position: 'sticky',
        top: 0,
        left: 0,
        borderRight: '1px solid #ddd',
        color: '#333', // Letras oscuras por defecto
      }}
    >
      {/* Buscador */}
      <div className="sidebar-search-container" style={{ padding: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
          className="sidebar-search-input"
          aria-label="Buscar productos"
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {/* Menú de categorías */}
      <Menu
        iconShape="circle"
        style={{ paddingTop: '0.5rem' }}
        menuItemStyles={{
          button: {
            color: '#333', // Color del texto normal
            backgroundColor: '#ffffff', // Fondo normal
            '&:hover': {
              backgroundColor: '#999999', // Fondo gris oscuro en hover
              color: '#ffffff',            // Letras blancas al hacer hover
            },
            '&.ps-active': {
              backgroundColor: '#555555', // Fondo cuando está activo
              color: '#ffffff',            // Letras blancas cuando activo
            },
          },
        }}
      >
        <MenuItem icon={<FaHome />} onClick={closeSidebar}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
        </MenuItem>
        <MenuItem icon={<FaLaptop />} onClick={closeSidebar}>
          <Link to="/categoria/llaveros" style={{ color: 'inherit', textDecoration: 'none' }}>Llaveros</Link>
        </MenuItem>
        <MenuItem icon={<FaTshirt />} onClick={closeSidebar}>
          <Link to="/categoria/figuras" style={{ color: 'inherit', textDecoration: 'none' }}>Figuras</Link>
        </MenuItem>
        <MenuItem icon={<FaCouch />} onClick={closeSidebar}>
          <Link to="/categoria/utilidades" style={{ color: 'inherit', textDecoration: 'none' }}>Utilidades</Link>
        </MenuItem>
        <MenuItem icon={<FaBasketballBall />} onClick={closeSidebar}>
          <Link to="/categoria/vehiculos" style={{ color: 'inherit', textDecoration: 'none' }}>Vehiculos</Link>
        </MenuItem>
       
      </Menu>
    </Sidebar>
  );
}

export default MySidebar;
