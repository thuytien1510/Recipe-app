import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./IngredientInput.style.css";
import Modal from "react-bootstrap/Modal";

export default function IngredientInput({ ingredient, onChange, onCancel }) {
  const [name, setName] = useState(ingredient?.name || "");
  const [unit, setUnit] = useState(ingredient?.unit || "");
  const [price, setPrice] = useState((ingredient?.price || "0").toString());
  const [show, setShow] = useState(false);
  const [invalid, setInValid] = useState(false);

  const handleAdd = () => {
    if (name) {
      onChange({ id: uuidv4(), name, unit, price });
      setName("");
      setUnit("");
      setPrice(0);
      setInValid(false);
    } else setInValid(true);
  };

  const handleSave = () => {
    setShow(true);
    if (name) {
      onChange({ id: uuidv4(), name, unit, price });
    } else setInValid(true);
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
      <form className="d-flex flex-wrap gap-4 justify-content-center align-items-center my-3 mb-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Ingredient name"
          />
          {invalid && (
            <div className="position-absolute ms-2 text-danger mb-2  ">
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
          min="0"
          value={price}
          onChange={handlePriceChange}
          placeholder="Ingredient price"
        />
        {ingredient?.id ? (
          <div className="d-flex gap-3 mx-4">
            <Button variant="default" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </div>
        ) : (
          <Button variant="dark" onClick={handleAdd} className="px-4">
            Add
          </Button>
        )}
      </form>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="fs-4">
            {!invalid
              ? "Are you sure want to change?"
              : "Please enter Ingredient name"}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {!invalid && (
              <Button variant="primary" onClick={onCancel}>
                Save Changes
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}
