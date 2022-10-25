import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./IngredientInputStyle.css";
import Modal from "react-bootstrap/Modal";

export default function IngredientInput({ ingredient, onChange, onCancel }) {
  const [name, setName] = useState(ingredient?.name || "");
  const [unit, setUnit] = useState(ingredient?.unit || "");
  const [price, setPrice] = useState((ingredient?.price || "0").toString());
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState(false);

  const handleAdd = () => {
    if (name) {
      onChange({ id: uuidv4(), name, unit, price });
      setName("");
      setUnit("");
      setPrice(0);
      setValid(false);
    } else setValid(true);
  };

  const handleSave = () => {
    onChange({ id: ingredient.id, name, unit, price });
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  return (
    <>
      <form className="d-flex flex-wrap my-3 gap-4 w-75 justify-content-center align-items-center">
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Ingredient name"
          />
          {valid && (
            <div className="position-absolute ms-2 text-danger mb-2">
              Please enter Ingredient name
            </div>
          )}
        </div>
        <input
          type="text"
          value={unit}
          onChange={handleUnitChange}
          placeholder="Unit"
        />
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="Ingredient price"
        />
        {ingredient?.id ? (
          <div>
            <Button variant="default" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </div>
        ) : (
          <Button variant="dark" onClick={handleAdd}>
            Add
          </Button>
        )}
      </form>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="fs-4">Are you sure want to change?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onCancel}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}
