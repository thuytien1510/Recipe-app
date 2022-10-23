import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import IngredientInput from "./IngredientInput";

export default function IngredientItem({ ingredient, onUpdate, onRemove }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => setIsEdit(true);

  const handlCancel = () => {
    setIsEdit(false);
  }

  const handleSave = (values) => {
    onUpdate(values);
    setIsEdit(true);
  }

  const handleDelete = () => {
    onRemove(ingredient.id);
  }

  return (isEdit ?
    <IngredientInput
      ingredient={ingredient}
      onChange={handleSave}
      onCancel={handlCancel}
    />
    :
    <div className="d-flex">
      <div style={{ color: 'black' }}>{ingredient.name}  {ingredient.price}</div>
      <Button variant="primary" onClick={handleEdit}>
        Edit
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}
