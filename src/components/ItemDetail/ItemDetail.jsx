
import Contador from '../Contador/Contador';
import { useCartContext } from "../../context/CartContext"
import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export const ItemDetail = ({datos}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext(); 

    const onAdd = (quantity) => {
        setGoToCart(true); 
        addProduct(datos, quantity);  
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail-image" src={datos.image} alt="" />
                <div className="content">
                    <h1>{datos.title}</h1>
                    {
                        goToCart
                        ? <Link to='/cart'>Finalizar Compra</Link>
                        : <Contador initial={1} stock={5} onAdd={onAdd} />
                    }
                   
                    
                </div>
            </div>
        </div>
    );
}

export default ItemDetail; 

