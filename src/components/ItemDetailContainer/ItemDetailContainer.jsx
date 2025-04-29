import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fetchData from '../../fetchData';
import Loader from '../Loader/Loader';

function ItemDetailContainer() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetchData()
            .then(response => {
                const productoAMostrar = response.find(el => el.id === parseInt(id));
                setProducto(productoAMostrar);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [id]);

    return (
        loading ? 
            <Loader /> 
            : 
            
            <ItemDetail producto={producto} />

            
            
    );
}

export default ItemDetailContainer;