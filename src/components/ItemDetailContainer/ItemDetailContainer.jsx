
import React, {useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
//import cafeoma from "../../media/cafe-oma.webp"
//import cafequindio from "../../media/cafe-quindio.webp"
//import cafesalento from "../../media/cafe-salento.webp"
//import cafetostao from "../../media/cafe-tostao.webp"
//import cafejuanvaldez from "../../media/cafe-jv.webp"
//import cafematiz from "../../media/cafe-matiz2.jpg"

//const cafes = [
  //{ id: 1, price: 19, image: cafeoma, category: "economy", title: "Café Oma"},
  //{ id: 2, price: 25, image: cafequindio, category: "premium", title: "Café Quindio"},
  //{ id: 3, price: 29, image: cafesalento, category: "premium", title: "Café Salento"},
  //{ id: 4, price: 18, image: cafetostao, category: "economy", title: "Café Tostao"},
  //{ id: 5, price: 25, image: cafejuanvaldez, category: "premium", title: "Café Juan Valdéz"},
  //{ id: 6, price: 19, image: cafematiz, category: "economy", title: "Café Matíz"},
//];

export const ItemDetailContainer = () => {

    const [datos, setDatos] = useState({}); 

    const { detalleId } = useParams();

    useEffect(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, "productos", detalleId);
      getDoc(queryDoc)
      .then(res => setDatos({ id: res.id, ...res.data()}))
    }, [detalleId])

    return (
        <ItemDetail datos={datos}/>
    );
}

export default ItemDetailContainer; 