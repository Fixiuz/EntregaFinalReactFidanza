// src/components/ItemList/ItemList.jsx
import Item from '../Item/Item'; // Asegurate de tener este componente. Si no, decímelo.
import './ItemList.css'; // si querés aplicarle estilos

function ItemList({ productos }) {
  return (
    <div className="item-list">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;
