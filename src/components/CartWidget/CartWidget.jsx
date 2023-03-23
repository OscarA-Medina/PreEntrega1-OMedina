import React from 'react';
import Contador from '../Contador/Contador';

export const CartWidget = () => {

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }

  return (
    <div>
      <i className="bi bi-cart3"></i>
      <Contador initial={1} stock={10} onAdd={onAdd} />
    </div>
  )
}

export default CartWidget