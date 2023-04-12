import React, { useEffect, useState } from 'react'

import Title from '../Title/Title'
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

const cafes = [
  { id: 1, image: "src/media/cafe-colombia.webp", category: "economy", title: "Café Oma"},
  { id: 2, image: "./media/cafe-quindio.webp", category: "premium", title: "Café Quindio"},
  { id: 3, image: "./media/cafe-salento.webp", category: "premium", title: "Café Salento"},
  { id: 4, image: "./media/cafe-tostao.webp", category: "economy", title: "Café Tostao"},
  { id: 5, image: "./media/cafe-jv.webp", category: "premium", title: "Café Juan Valdéz"},
  { id: 6, image: "src/media/cafe-matiz2,jpg", category: "economy", title: "Café Matíz"},
];


 export const ItemListContainer = ({texto}) => {
  const [datos, setDatos] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getDatos = new Promise(resolve => {
      setTimeout(() => {
        resolve(cafes);
      }, 1000);
    });
    if (categoriaId) {
      getDatos.then(res => setDatos(res.filter(cafe => cafe.category === categoriaId)));
    } else {
      getDatos.then(res => setDatos(res));
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