import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaHome, FaLaptop, FaTshirt, FaCouch, FaBasketballBall,FaTools } from 'react-icons/fa';
import { GiKeyring } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css';
import { MdOutlineSmartToy } from "react-icons/md";
import { PiCarProfileDuotone } from "react-icons/pi";



function MySidebar({ isSidebarOpen, closeSidebar }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      navigate(`/buscar?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      closeSidebar?.(); // solo si fue pasada como prop
    }
  };

  return (
    <Sidebar
      backgroundColor="transparent" // Elimina el color de fondo predeterminado
      width="250px"
      collapsed={false}
      toggled={isSidebarOpen}
      breakPoint="md"
      style={{
        
        height: '100vh',
        background: 'linear-gradient(to right, #155d9e 0%, #155d9e 10%, #13286d 50%, #155d9e 90%, #155d9e 100%)',
        position: 'sticky',
        top: 0,
        left: 0,
        borderRight: '1px solid #ddd',
        color: '#333',
      }}
    >
      {/* Buscador */}
      <div className="sidebar-search-container" style={{ padding: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
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
            color: '#ffffff',
            backgroundColor: '##0159B8',
            '&:hover': {
              backgroundColor: '#ffffff',
              color: '#0159B8',
            },
            '&.ps-active': {
              backgroundColor: '#555555',
              color: '#ffffff',
            },
          },
        }}
      >
        <MenuItem icon={<FaHome />} onClick={closeSidebar}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link>
        </MenuItem>
        <MenuItem icon={<GiKeyring />} onClick={closeSidebar}>
          <Link to="/categoria/llaveros" style={{ color: 'inherit', textDecoration: 'none' }}>Llaveros</Link>
        </MenuItem>
        <MenuItem icon={<MdOutlineSmartToy />} onClick={closeSidebar}>
          <Link to="/categoria/figuras" style={{ color: 'inherit', textDecoration: 'none' }}>Figuras</Link>
        </MenuItem>
        <MenuItem icon={<FaTools />} onClick={closeSidebar}>
          <Link to="/categoria/utilidades" style={{ color: 'inherit', textDecoration: 'none' }}>Utilidades</Link>
        </MenuItem>
        <MenuItem icon={<PiCarProfileDuotone />} onClick={closeSidebar}>
          <Link to="/categoria/vehiculos" style={{ color: 'inherit', textDecoration: 'none' }}>Vehículos</Link>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default MySidebar;
