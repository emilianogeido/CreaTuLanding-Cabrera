import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import PageNotFound from "./components/pageNotFound/PageNotFound.jsx";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar titulo="Sword Shop" />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer titulo="Atenas Sword Shop" />}
          />
          <Route
            path="/categorias/:categoryID"
            element={<ItemListContainer titulo="Atenas Sword Shop" />}
          />
          <Route
            path="/producto/:productID"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<h1>Carrito</h1>} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
