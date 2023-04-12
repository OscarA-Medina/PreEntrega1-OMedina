
import React, {useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

const cafes = [
  { id: 1, image: "src/media/cafe-colombia.webp", category: `economy`, title: "Café Oma"},
  { id: 2, image: "/media/cafe-quindio.webp", category: `premium`, title: "Café Quindio"},
  { id: 3, image: "/media/cafe-salento.webp", category: `premium`, title: "Café Salento"},
  { id: 4, image: "/media/cafe-tostao.webp", category: `economy`, title: "Café Tostao"},
  { id: 5, image: "./media/cafe-jv.webp", category: `premium`, title: "Café Juan Valdéz"},
  { id: 6, image: "./media/matiz-340g.webp", category: `economy`, title: "Café Matíz"},

];

export const ItemDetailContainer = () => {

    const [datos, setDatos] = useState({}); 

    const { detalleId } = useParams();

    useEffect(() => {
        const getDatos = new Promise(resolve => {
          setTimeout(() => {
            resolve(cafes);
          }, 1000);
        });
        getDatos.then(res => setDatos(res.find(cafe => cafe.id === parseInt(detalleId))));
    
      }, [detalleId])

    return (
        <ItemDetail datos={datos}/>
    );
}

export default ItemDetailContainer; 