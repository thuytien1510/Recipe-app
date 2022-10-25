import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeDetail from "./RecipeDetail";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, updateRecipe } from "../../redux/actions";
import { getIngredients } from "../../redux/selectors";
import "./RecipesModalStyle.css";

const DEFAULT_RECIPE =  {
  name: "",
  description: "",
  duration: '',
  imgURL:
    "",
  ingredients: [
    {
      id: uuidv4(),
      quantity: 1,
    }
  ]
};

export function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default function RecipesModal({ recipe, onClose }) {

  const ingredients = useSelector(getIngredients);
  const dispatch = useDispatch();
  const isAddingNew = !recipe;
  const [isEdit, setIsEdit] = useState(false);
  const { control, register, handleSubmit, watch, reset } = useForm(recipe || DEFAULT_RECIPE);

  const { fields, append, remove } = useFieldArray({
    control, 
    name: "ingredients",
  });
  const imgURL = watch("imgURL");

  useEffect(() => {
    reset(recipe || DEFAULT_RECIPE);
  }, [recipe]);

  const handleEdit = () => setIsEdit(true);
  const handleCancel = () => {
    isAddingNew ? onClose() : setIsEdit(false);
  };

  const handleUpdate = handleSubmit((data) => dispatch(updateRecipe(data)));

  const handleAddNew = handleSubmit((data) =>
    dispatch(addRecipe({ ...data, id: uuidv4() }))
  );

  const handleSave = () => {
    if (isAddingNew) {
      handleAddNew();
    } else {
      handleUpdate();
    }
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isAddingNew
            ? "Add Recipe"
            : isEdit
            ? "Update Recipe"
            : "Recipe Details"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isEdit || isAddingNew ? (
          <form className="rounded-4">
            <div className="p-3 d-grid gap-3">
              <div>
                <label htmlFor="name" className="d-block">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Name"
                  id="name"
                  className="border-dark w-100"
                />
              </div>
              <div>
                <label htmlFor="image" className="d-block">
                  Image Link
                </label>
                <input
                  {...register("imgURL")}
                  placeholder="Image URL"
                  className="border-dark w-100"
                  id="image"
                />
              </div>
              {imgURL && (
                <img
                  src={imgURL}
                  alt=""
                  width="200px"
                  className="border border-3 my-0 mx-auto"
                />
              )}
              <div>
                <label htmlFor="duration" className="d-block">
                  Duration
                </label>
                <input
                  {...register("duration")}
                  placeholder="Duration"
                  type="number"
                  className="border-dark w-100"
                  id="duration"
                />
              </div>
              <div>
                <label htmlFor="desc" className="d-block">
                  Description
                </label>
                <textarea
                  className="border-dark border border-2 rounded-3 p-2 fs-6 w-100"
                  {...register("description")}
                  placeholder="Description"
                  id="desc"
                />
              </div>
            </div>

            {fields.map((field, index) => (
              <div
                key={field.id}
                className="d-flex mx-3 my-2 mt-0 justify-content-between"
              >
                <Select
                  register={register}
                  name={`ingredients.${index}.id`}
                  options={ingredients.map((ing) => ({
                    id: ing.id,
                    name: ing.name,
                  }))}
                  className="w-50 px-2 border border-dark border-2 rounded-3"
                />
                <input
                  type="number"
                  min="1"
                  {...register(`ingredients.${index}.quantity`)}
                  className="w-25"
                />
                <Button
                  onClick={() => remove(field.id)}
                  type="danger"
                  className="btn-danger px-4"
                >
                  X
                </Button>
              </div>
            ))}

            <Button onClick={() => append({})} className="mx-3">
              Add Ingredient
            </Button>
          </form>
        ) : (
          <RecipeDetail recipe={recipe} />
        )}
      </Modal.Body>
      <Modal.Footer>
        {isEdit || isAddingNew ? (
          <>
            <Button variant="secondary" onClick={handleCancel}>
              Cancle
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Edit
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}
