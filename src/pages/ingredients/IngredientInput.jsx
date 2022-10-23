import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import './IngredientInputStyle.css'

export default function IngredientInput({ ingredient, onChange, onCancel }) {
  const [name, setName] = useState(ingredient?.name || '');
  const [unit, setUnit] = useState(ingredient?.unit || '');
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

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  }

  return (
    <form className="d-flex flex-wrap mb-4 gap-2 w-75">
      <input type="text" value={name} onChange={handleNameChange} placeholder="Ingredient name" />
      <input type="text" value={unit} onChange={handleUnitChange} placeholder="Unit" />
      <input type="number" value={price} onChange={handlePriceChange} placeholder="Ingredient price" />
      {ingredient?.id ?
        <div>
          <Button variant="default" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
        :
        <Button variant="primary"  onClick={handleAdd}>
          Add
        </Button>
      }
    </form>
  );
}
