import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Button, Text } from '@chakra-ui/react';
import { getProductsById } from "../../data/asyncMock";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { productID } = useParams();
  
    useEffect(() => {
        setLoading(true);
      
        getProductsById(productID)
          .then((el) => {
            console.log(productID);
            setProduct(el);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      
      }, [productID]);
  
    return (
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        {product && product.img && ( // Verifica si product y product.img están definidos antes de acceder a sus propiedades
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={product.img}
            alt={product.nombre}
          />
        )}
  
        <Stack>
          <CardBody>
            <Heading size='md'>{product && product.nombre}</Heading> {/* Verifica si product está definido antes de acceder a su propiedad 'nombre' */}
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
    );
};

export default ItemDetailContainer;