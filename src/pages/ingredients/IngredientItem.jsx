import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import IngredientInput from "./IngredientInput";
import './IngredientItemStyle.css'

export default function IngredientItem({ ingredient, onUpdate, onRemove }) {
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => setIsEdit(true);

  const handlCancel = () => {
    setIsEdit(false);
  };

  const handleSave = (values) => {
    onUpdate(values);
    setIsEdit(true);
  };

  const handleDelete = () => {
    onRemove(ingredient.id);
  };

  return isEdit ? (
    <IngredientInput
      ingredient={ingredient}
      onChange={handleSave}
      onCancel={handlCancel}
    />
  ) : (
    <div className="d-flex gap-2 my-2 justify-content-between flex-wrap border border-2 align-items-center p-2 px-3 rounded-4 w-75">
      <div className="text-dark fs-5 d-flex flex-wrap gap-3 ingredient">
        <span>Name: {ingredient.name}</span>
         <span>Unit: {ingredient.unit}</span>
         <span>Price:
        {ingredient.price}</span>
      </div>
      <div className="d-flex gap-2">
      <Button variant="primary" onClick={handleEdit}>
        Edit
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
      </div>
    </div>
  );
}
