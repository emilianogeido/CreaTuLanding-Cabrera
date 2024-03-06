import React, { useState } from 'react'
import { Card,CardBody, CardFooter, Image, Stack, Heading, Button, Text, Spinner } from '@chakra-ui/react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({img, nombre, descripcion, stock}) => {
const [quantity, setQuantity] = useState()

const onAdd = (cantidad) => {
    setQuantity(cantidad)
    console.log(`agregaste ${cantidad} productos`)
}


  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '400px' }}
    src={img}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{nombre}</Heading>

      <Text py='2'>
      {descripcion}
      </Text>
    </CardBody>

    <CardFooter className='cardFooterContainer'>
        {
            quantity > 0 ? <Link to={"/cart"}>Ir al carrito</Link> :
            <ItemCount onAdd={onAdd} initialValue={1} inventario={stock} />
        }
    
      
    </CardFooter>
  </Stack>
</Card>
  )
}

export default ItemDetail