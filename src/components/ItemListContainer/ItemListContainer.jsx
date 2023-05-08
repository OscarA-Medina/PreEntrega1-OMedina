import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Title from '../Title/Title'
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
//mport cafeoma from "../../media/cafe-oma.webp"
//import cafequindio from "../../media/cafe-quindio.webp"
//import cafesalento from "../../media/cafe-salento.webp"
//import cafetostao from "../../media/cafe-tostao.webp"
//import cafejuanvaldez from "../../media/cafe-jv.webp"
//import cafematiz from "../../media/cafe-matiz2.jpg"

// const cafes = [
  //{ id: 1, price: 19, image: cafeoma, category: "economy", title: "Café Oma"},
  //{ id: 2, price: 25, image: cafequindio, category: "premium", title: "Café Quindio"},
  //{ id: 3, price: 29, image: cafesalento, category: "premium", title: "Café Salento"},
  //{ id: 4, price: 18, image: cafetostao, category: "economy", title: "Café Tostao"},
  //{ id: 5, price: 25, image: cafejuanvaldez, category: "premium", title: "Café Juan Valdéz"},
  //{ id: 6, price: 19, image: cafematiz, category: "economy", title: "Café Matíz"},
//];


 export const ItemListContainer = ({texto}) => {
  const [datos, setDatos] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
      const queryCollection = collection(querydb, "productos");
      
      
    if (categoriaId) {
      const queryFilter = query(queryCollection, where("category", "==", categoriaId))
      getDocs(queryFilter)
      .then(res => setDatos(res.docs.map(product => ({id: product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
        .then(res => setDatos(res.docs.map(product => ({id: product.id, ...product.data() }))))
    };
    

  }, [categoriaId]);

  return (
    <div>
      <Title greeting={texto} />
      <ItemList datos={datos}/>
      
    </div>
  )
}

export default ItemListContainer