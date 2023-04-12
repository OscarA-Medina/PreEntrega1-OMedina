
import React from "react";
import Item from "../Item/item";

const ItemList = ({ datos = [] }) => {
    return (
        datos.map(cafe => <Item key={cafe.id} info={cafe} />)
    );
}

export default ItemList; 

