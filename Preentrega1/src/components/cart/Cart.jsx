import { Button, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdOutlineDeleteOutline } from "react-icons/md";

const Cart = () => {

  const { cart, getTotal, removeItem, clearCart, decrementarCantidad, incrementarCantidad } = useContext(CartContext)

  if(cart.length > 0 ) {

    
    return(
      <TableContainer>
      <Table variant='striped' colorScheme='orange'>
      <Thead>
      <Tr>
      <Th>Nombre</Th>
      <Th>Cantidad</Th>
      <Th></Th>
      <Th>Precio unitario</Th>
      <Th>Subtotal</Th>
      <Th></Th>
      </Tr>
      </Thead>
    <Tbody>
    {
        cart.map((prod) => (
          <Tr key={prod.id}>
            <Td>{prod.nombre}</Td>
            <Td>{prod.quantity}</Td>
            <Td>
              {
                <>
                  <Button onClick={() => decrementarCantidad(prod.id)}>-</Button>
                  {prod.quantity}
                  <Button onClick={() => incrementarCantidad(prod.id)}>+</Button>
                </>
              }
            </Td>
            <Td>{prod.precio}</Td>
            <Td>${prod.precio * prod.quantity}</Td>
            <Td><Button className='btnRemoveItem' onClick={(e) => removeItem(prod.id)}><MdOutlineDeleteOutline /></Button></Td>
          </Tr>
        ))
      }
    </Tbody>
    <Tfoot>
      <Tr>
        <Th><Button onClick={()=> clearCart()}>Vaciar carrito</Button></Th>
        <Th>Total: ${getTotal()}</Th>
        <Th><Heading ><Link to={'/checkout'}>Finalizar la compra</Link></Heading></Th>
        </Tr>
        </Tfoot>
        </Table>
        </TableContainer>
        

        )
      } else {

        
        
        return (
          <>
      <Heading>Todavía no agregaste productos</Heading>
      <Link to='/'>Ver productos</Link>
      </>
      
      )
    }

}

export default Cart