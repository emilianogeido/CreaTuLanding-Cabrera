import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner, Heading } from '@chakra-ui/react'
import "./ItemListContainer.css"


const ItemListConteiner = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryID} = useParams()
  console.log(categoryID)

  useEffect(() => {
    setLoading(true)
   if (categoryID) {
    getProductsByCategory(categoryID)
    .then ((el)=> setProducts(el))
    .catch((err)=> console.log(err))
    .finally(()=> setLoading(false))
   }else {
    getProducts()
    .then ((el)=> setProducts(el))
    .catch((err)=> console.log(err))
    .finally(()=> setLoading(false))
   }
  }, [categoryID]);

  return (
    <div>
      
      {
        loading ? <h2><Spinner color='orange.500' /></h2> : 
        <div className="product-container">
        <Heading size='md' color='orange.800' >{titulo}</Heading>
        <ItemList data={products} />
        </div>
      }
      
    </div>
  )
}

export default ItemListConteiner

