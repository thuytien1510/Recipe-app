import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function Ingredient({ item, handleHideIngredient, handleChangeIngredients }) {
  const [ingredient, setIngredient] = useState({
    name: item.name,
    amount: 0
  });
  const handleChangeAmount = (e) => {
    setIngredient({ ...ingredient, amount: e.target.value });
  };

  useEffect(() => {
    handleChangeIngredients(ingredient)
  }, [ingredient])
  
  return (
    <div className="d-flex mb-3 gap-3 justify-content-between">
      <input
        className="mb-0 w-75 bg-white"
        type="text"
        value={item.name}
        disabled
      />
      <input
        className="mb-0 w-25"
        type="number"
        value={ingredient.amount}
        onChange={handleChangeAmount}
      />
      <Button variant="danger" onClick={handleHideIngredient}>
        X
      </Button>
    </div>
  );
}
