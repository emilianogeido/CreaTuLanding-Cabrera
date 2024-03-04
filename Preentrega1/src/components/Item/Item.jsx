import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import ItemCount from '../itemCount/ItemCount'
import useCounter from '../../hooks/useCounter'

const Item = ({nombre, precio, img, stock }) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src= {img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre}</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
  <ItemCount inventario={stock} initialValue={1} />
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item