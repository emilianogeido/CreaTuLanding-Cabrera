import React, {useState} from 'react'
import useCounter from '../../hooks/useCounter'

const ItemCount = ({inventario, initialValue}) => {
    const {count, incrementarCantidad, decrementarCantidad} = useCounter(initialValue, inventario)
  return (
    <div>
        
        <button onClick={decrementarCantidad}>-</button>
        <h2>{count}</h2>
        <button onClick={incrementarCantidad}>+</button>
    </div>
  )
}

export default ItemCount