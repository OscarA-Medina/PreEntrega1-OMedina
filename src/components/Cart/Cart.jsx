import React from "react";
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/itemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: "Pablo",
            email: "pablo@gmail.com",
            phone: "123123123",
            address: "asdd",
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }

    if (cart.lenght === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/">Hacer compras</Link>
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }    
            <p>
                total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Generar Orden</button>
        </>
    );
}

export default Cart; 