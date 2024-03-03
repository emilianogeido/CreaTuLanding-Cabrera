import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer titulo="Sword Shop" />
    </ChakraProvider>
  );
}

export default App;
