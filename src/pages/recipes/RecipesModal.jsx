import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import RecipeDetail from "./RecipeDetail";
import '../../App.css'
import { useForm } from "react-hook-form";

export default function RecipesModal({ recipe, displayForm, onClose }) {
  const isAddingNew = !recipe;
  const [isEdit, setIsEdit] = useState(false);
  const { register, handleSubmit, watch, reset } = useForm();
  const imgURL = watch('imgURL')

  useEffect(() => {
    reset(recipe);
  }, []);

  const handleEdit = () => setIsEdit(true);
  const handleCancel = () => {
    reset();
    isAddingNew ? onClose() : setIsEdit(false);
  }

  const handleUpdate = handleSubmit(data => console.log(data));

  const handleAddNew = handleSubmit(data => console.log(data));

  const handleSave = () => {
    if (isAddingNew) {
      handleAddNew();
    } else {
      handleUpdate();
    }
    handleCancel();
  }

  return (
    <Modal show={displayForm} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isAddingNew ? 'Add Recipe' : isEdit ? 'Update Recipe' : 'Recipe Details'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isEdit || isAddingNew ?
          <form className="rounded-4">
            <div className="p-3 card form-recipe">
              <input type="text" {...register("name")} placeholder="Name" className="border-dark" />
              <input
                {...register("imgURL")}
                placeholder="Image URL"
                className="border-dark"
              />
              {imgURL && <img src={imgURL} alt="" width="200px" className="mb-3" />}
              <input
                {...register("duration")}
                placeholder="Duration"
                type='number'
                className="border-dark"
              />
              <textarea
                className="border-dark"
                {...register("description")}
                placeholder="Description"
              />
            </div>
          </form>
          :
          <RecipeDetail recipe={recipe} />
        }
      </Modal.Body>
      <Modal.Footer>
        {isEdit || isAddingNew ?
          <>
            <Button variant="secondary" onClick={handleCancel}>
              Cancle
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </>
          :
          <>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Edit
            </Button>
          </>
        }
      </Modal.Footer>
    </Modal >
  );
}
