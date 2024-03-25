import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Spinner
} from "@chakra-ui/react";
import ItemDetail from "../itemDetail/ItemDetail";
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { Box } from '@chakra-ui/react'

const ItemDetailContainer = () => {
  const [product, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { productID } = useParams();

  useEffect(() => {
    const getProduct = async() => {
      const queryRef = doc(db, 'productos', productID)

      const response = await getDoc(queryRef)
      const newProduct = {
        id: response.id,
        ...response.data()
      }
      setProducts(newProduct)
      setLoading(false)
    }
    getProduct()
  }, []);


  return (
    <>
      {loading ? <Spinner color="orange.500" /> : <ItemDetail {...product} />}
    </>
  );
};

export default ItemDetailContainer;
