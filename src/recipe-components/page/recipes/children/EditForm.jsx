import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import IngredientList from "./IngredientList";
import '../StyleRecipeComponent.css'
export default function EditForm({ addNewRecipe }) {
  const { register, handleSubmit } = useForm();
  const [orderList, setOrderList] = useState([1]);
  const [img, setImg] = useState("");
  const [data, setData] = useState({
    id: "",
    name: "",
    description: "",
    imgURL: "",
    ingredients: [],
  });

  const handleAddButtonClick = (recipe) => {
    addNewRecipe({ ...recipe, ingredients: orderList.filter((e) => e.name) });
  };

  const handleAddIngredient = () => {
    if (orderList[orderList.length - 1].name || orderList.length === 0) {
      console.log(1);
      return setOrderList([...orderList, { name: "", quantity: 1 }]);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          setData(data);
          handleAddButtonClick(data);
        })}
        className="rounded-4"
      >
        <div className="mb-3">
          <Button variant="dark" type="submit" className="me-2 px-4 py-1 fw-semibold fs-5">
            Save
          </Button>
          <Button
            className="me-2 px-4"
            variant="danger"
            type="reset"
            onClick={() => setOrderList([])}
          >
            Cancel
          </Button>
        </div>
        <div className="p-3 card form-recipe">
        <input type="text" {...register("name")} placeholder="Name" className="border-dark"/>
        <input
          {...register("imgURL")}
          placeholder="Image URL"
          onChange={(e) => setImg(e.target.value)}
          className="border-dark"
        />
        {img && <img src={img} alt="" width="200px" className="mb-3" />}

        <textarea
          className="border-dark"
          {...register("description")}
          placeholder="Description"
          style={{ color: "black" }}
        />

        <div>
          <IngredientList orderList={orderList} setOrderList={setOrderList} />
        </div>
        </div>
      </form>
      <button className="submit-add " onClick={handleAddIngredient} >
        Add ingredient
      </button>
    </>
  );
}
