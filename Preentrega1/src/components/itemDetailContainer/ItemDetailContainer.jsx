import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Spinner
} from "@chakra-ui/react";
import { getProductsById } from "../../data/asyncMock";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { productID } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductsById(productID)
      .then((el) => setProducts(el))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(productID);
  console.log(product);

  return (
    <>
      {loading ? <Spinner color="orange.500" /> : <ItemDetail {...product} />}
    </>
  );
};

export default ItemDetailContainer;
