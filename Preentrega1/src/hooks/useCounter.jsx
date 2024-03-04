import React, {useState} from 'react'

const useCounter = ({inventario, initialValue}) => {
    const [count, setCount] = useState(initialValue)
    const incrementarCantidad =() => {
        count < inventario && setCount(count + 1)
    }
    const decrementarCantidad = () => {
        count > initialValue && setCount(count - 1)
    }
  return {
    count,
    incrementarCantidad,
    decrementarCantidad
  }
   
  
}

export default useCounter