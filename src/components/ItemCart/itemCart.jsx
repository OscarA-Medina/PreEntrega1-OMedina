import React from "react";
import "./ItemCart.css";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className="itemCart">
            <img src= {product.image} alt= {product.title} />
            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart 