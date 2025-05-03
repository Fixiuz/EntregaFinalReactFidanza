import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import ItemList from '../ItemList/ItemList';

function Buscar() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';
  const { buscarProductos, loadingProductos } = useAppContext();

  const resultados = buscarProductos(query);

  console.log('Búsqueda:', query);
  console.log('Resultados:', resultados);

  if (loadingProductos) return <p>Cargando productos...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Buscando: "{query}"</h2>
      {resultados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <ItemList productos={resultados} />
      )}
    </div>
  );
}

export default Buscar;
