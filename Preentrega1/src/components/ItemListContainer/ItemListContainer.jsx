import React, { useEffect, useState } from "react";
import { getProducts } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListConteiner = ({ titulo }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts()
      .then((info) => setData(info))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>{titulo}</h1>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListConteiner
