import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function IngredientInput({ typeInput, ingredient, onChange, onCancel }) {
  const [name, setName] = useState(ingredient?.name || '');
  const [price, setPrice] = useState((ingredient?.price || '0').toString());

  const handleAdd = () => {
    onChange({ id: uuidv4(), name, price });
    setName('');
    setPrice(0);
  }

  const handleSave = () => {
    onChange({ id: ingredient.id, name, price });
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  }

  return (
    <form className="d-flex">
      <input type="text" value={name} onChange={handleNameChange} placeholder="Ingredient name" />
      <input type="number" value={price} onChange={handlePriceChange} placeholder="Ingredient price" />
      {ingredient?.id ?
        <>
          <Button variant="default" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </>
        :
        <Button variant="primary" onClick={handleAdd}>
          Add
        </Button>
      }
    </form>
  );
}
