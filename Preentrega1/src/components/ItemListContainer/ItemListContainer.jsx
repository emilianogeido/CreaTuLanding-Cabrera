import React, { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner, Heading } from '@chakra-ui/react'
import "./ItemListContainer.css"
import  CartContext  from "../../context/CartContext";
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListConteiner = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryID} = useParams()

  const {cart} = useContext(CartContext)

  useEffect(() => {
    setLoading(true)
    const getProducts = async () => {
      const queryRef = !categoryID ?
      collection(db, 'productos') :
      query(collection(db, 'productos'), where('categoria', '==' , categoryID ))
      const response = await getDocs(queryRef)
      console.log(response)
      const products = response.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id
        }
        return newProduct
      })
      setProducts(products)
      setLoading(false)
    }

    getProducts()


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

