import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import { Button } from "@chakra-ui/react";

const ItemCount = ({ inventario, initialValue, onAdd }) => {
  const { count, incrementarCantidad, decrementarCantidad } = useCounter(
    initialValue,
    inventario
  );
  return (
    <div>
      <Button colorScheme="orange" onClick={incrementarCantidad}>
        +
      </Button>
      <h2>{count}</h2>
      <Button colorScheme="orange" onClick={decrementarCantidad}>
        -
      </Button>

      <Button variant="ghost" colorScheme="orange" onClick={() => onAdd(count)}>
        Buy Sword
      </Button>
    </div>
  );
};

export default ItemCount;
