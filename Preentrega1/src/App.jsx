import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    
    <ChakraProvider>
<ItemListContainer titulo='Sword Shop' />
      <NavBar />
      
      
      

    </ChakraProvider>
  )
}

export default App
