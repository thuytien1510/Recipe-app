import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import _ from "lodash";
import RecipeDetail from "./RecipeDetail";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, updateRecipe } from "../../redux/actions";
import { getIngredients } from "../../redux/selectors";
import "./RecipesModalStyle.css";
import { Input } from "../../components/input/Input";
import { Select } from "../../components/select/Select";

const DEFAULT_RECIPE = {
  name: "",
  description: "",
  duration: '',
  imgURL:
    "",
  ingredients: [
    {
      id: '',
      quantity: 1,
    }
  ]
};

export default function RecipesModal({ recipe, onClose }) {
  const ingredients = useSelector(getIngredients);
  const dispatch = useDispatch();
  const isAddingNew = !recipe;
  const [isEdit, setIsEdit] = useState(false);
  const { control, register, handleSubmit, watch, reset, trigger, formState: { errors } } = useForm(recipe || DEFAULT_RECIPE);

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
    dispatch(addRecipe({ ...data, id: '' }))
  );

  const handleSave = async () => {
    const isValid = await trigger();
    if (!isValid) return;

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
              <Input
                register={register}
                rules={
                  { required: { value: true, message: 'Please input recipe name!' } }
                }
                name="name"
                label="Name"
                placeholder="Name"
                errors={errors}
              />

              <Input
                register={register}
                rules={{
                  required: { value: true, message: 'Please input recipe image url!' },
                  pattern: { value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi, message: 'Please input a valid recipe image url!' }
                }}
                name="imgURL"
                label="Image Link"
                placeholder="Image URL"
                errors={errors}
              />

              {imgURL && !errors['imgURL'] && (
                <img
                  src={imgURL}
                  alt=""
                  width="200px"
                  className="border border-3 my-0 mx-auto"
                />
              )}

              <Input
                register={register}
                rules={
                  { required: { value: true, message: 'Please input recipe duration!' } }
                }
                name="duration"
                label="Duration"
                placeholder="Duration"
                errors={errors}
              />

              <Input
                register={register}
                rules={
                  { required: { value: true, message: 'Please input recipe description!' } }
                }
                name="description"
                label="Description"
                placeholder="Description"
                errors={errors}
              />
            </div>

            <label className="px-3">Ingredients:</label>
            <div style={{ marginLeft: '20px' }}>
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="d-flex mx-3 my-2 mt-0 justify-content-between"
                  style={{ gap: '12px' }}
                >
                  <Select
                    label="Name"
                    register={register}
                    name={`ingredients.${index}.id`}
                    rules={{
                      required: { value: true, message: 'Please select an ingredient!' }
                    }}
                    options={ingredients.map((ing) => ({
                      id: ing.id,
                      name: ing.name,
                    }))}
                    className="border border-dark border-2 rounded-3"
                    errors={errors}
                  />
                  <Input
                    type="number"
                    register={register}
                    rules={
                      { required: { value: true, message: 'Please input a number!' } }
                    }
                    name={`ingredients.${index}.quantity`}
                    label="Quantity"
                    errors={errors}
                    min="1"
                  />
                  <Button
                    onClick={() => { remove(index) }}
                    className="btn-danger px-4"
                    style={{ marginTop: '29px', height: '45px' }}
                    disabled={fields.length === 1}
                  >
                    X
                  </Button>
                </div>
              ))}
              <Button onClick={() => append({ id: '', quantity: 1 })} className="mx-3">
                Add Ingredient
              </Button>
            </div>
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
    </Modal >
  );
}
