import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavBar titulo="Sword Shop"  />
      <Routes>
        <Route path="/" element= {<ItemListContainer titulo="Atenas Sword Shop" />}/>
        <Route path="/categorias/:categoryID" element= {<ItemListContainer titulo="Atenas Sword Shop" />}/>
        <Route path="/producto/:productoID" element= {<ItemDetailContainer />}/>
      </Routes>
      
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
