import React from 'react'
import Item from '../Item/Item'


const ItemList = ({data}) => {
    
  return (
    <div>
       {data.map((el)=>(
        <div key={el.id}>
            <Item {...el}/>
        </div>
        
       ))}
    </div>
  )
}

export default ItemList

