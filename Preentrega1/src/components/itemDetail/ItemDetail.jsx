import React, { useContext, useState } from 'react'
import { Card, Image, Stack, CardBody, Heading, CardFooter, Text, Button } from '@chakra-ui/react'
import ItemCount from "../itemCount/ItemCount";
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from '../../context/CartContext'
const ItemDetail = ({ nombre, descripcion, img, stock, id, precio }) => {
    const [ quantity, setQuantity ] = useState()
    const { addItem, setStock } = useContext(CartContext)


    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        const item = {
          id,
          nombre,
          precio
        }
        setStock(stock)
        addItem(item, cantidad)


        toast.success(`Agregaste ${cantidad} productos`)
    }

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
      <Text>
        stock: {stock}
      </Text>
    </CardBody>

    <CardFooter className='cardFooterContainer'>
        {
            quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> :
            <ItemCount inventario={stock} initialValue={1} onAdd={onAdd} />
        }

    </CardFooter>
  </Stack>
  <ToastContainer />
</Card>
  )
}

export default ItemDetail
