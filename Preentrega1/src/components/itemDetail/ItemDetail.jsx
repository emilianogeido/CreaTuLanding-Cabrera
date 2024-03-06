import React from 'react'
import { Card,CardBody, CardFooter, Image, Stack, Heading, Button, Text, Spinner } from '@chakra-ui/react'

const ItemDetail = ({img, nombre, descripcion}) => {
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={img}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{nombre}</Heading>

      <Text py='2'>
      {descripcion}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Sword
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default ItemDetail