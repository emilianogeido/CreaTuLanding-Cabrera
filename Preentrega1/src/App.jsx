import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavBar titulo="Sword Shop"  />
      <Routes>
        <Route path="/" element= {<ItemListContainer titulo="Sword Shop" />}/>
      </Routes>
      
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
