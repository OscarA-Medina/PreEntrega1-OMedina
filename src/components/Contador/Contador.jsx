import './Contador.css';
import React, {useState} from 'react'

export const Contador = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount(count - 1);
  }

  const increase = () => {
    setCount(count + 1);
  } 

  return (
    <div className="contador">
        <button disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={increase}>+</button>
        <div>
            <button>Agregar al carrito</button>
        </div>
    </div>
  );
}


export default Contador; 