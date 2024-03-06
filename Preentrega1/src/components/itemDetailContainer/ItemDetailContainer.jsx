import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card,CardBody, CardFooter, Image, Stack, Heading, Button, Text } from '@chakra-ui/react'
import { getProductsById } from "../../data/asyncMock";


const ItemDetailContainer = () => {
    
        const [product, setProducts] = useState({});
        const [loading, setLoading] = useState(true);
        const {productID} = useParams()
      
        useEffect(() => {
          setLoading(true)
         
          getProductsById(productID)
          .then ((el)=> setProducts(el))
          .catch((err)=> console.log(err))
          .finally(()=> setLoading(false))
         
        }, []);
        console.log(productID)
        console.log(product)

    
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={product.img}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{product.nombre}</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default ItemDetailContainer