import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import IngredientInput from "./IngredientInput";
import "./IngredientItem.style.css";

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
    <div className="d-flex gap-3 m-3 justify-content-between align-items-center  flex-wrap border border-2 p-2 px-3 rounded-4 col-md-8 mx-auto">
      <div className="text-dark fs-5 d-flex flex-wrap justify-content-center gap-3 ingredient">
        <span>Name: {ingredient.name}</span>
        <span>Unit: {ingredient.unit}</span>
        <span>Price: {ingredient.price}</span>
      </div>
      <div className="d-flex gap-2 ms-auto">
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
