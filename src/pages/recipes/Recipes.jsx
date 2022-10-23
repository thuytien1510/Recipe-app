import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../../redux/actions";
import { recipeListSelector } from "../../redux/selectors";
import EditForm from "./children/EditForm";
import RecipeDetail from "./children/RecipeDetail";
import '../../App.css'

export default function Recipes() {
  const [displayForm, setDisplayForm] = useState(false);
  const [recipe, setRecipe] = useState(false);
  const dispatch = useDispatch();
  const recipeList = useSelector(recipeListSelector);

  const handelDisplay = () => {
    setDisplayForm(!displayForm);
    setRecipe(false);
  };

  const addNewRecipe = (data) => {
    const recipe = {
      id: uuidv4(),
      ...data,
    };
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="container mt-4">
      <Button variant="dark" onClick={handelDisplay} className="mb-5 p-2 px-4">
        New Recipe
      </Button>
      {(!displayForm && !recipe) && (
        <>
          <h1 className="text-center text-dark">Please select a Recipe!</h1>
          <hr className="bg-dark" />
        </>
      )}
      <div className="row">
        <div className="col-md-6">

          {displayForm && <hr className="bg-dark" />}
          {recipeList.map((recipe) => (
            <div
              onClick={() => {
                setRecipe(recipe);
                setDisplayForm(false);
              }}
              key={recipe.id}
              className="d-flex justify-content-between align-items-center list-item flex-wrap border rounded p-2 bg-white text-black mb-4 box-hover"
              style={{ minHeight: "100px", cursor: "pointer" }}
            >
              <div className="content ">
                <h3>{recipe.name}</h3>
                <p>Descriptiton: {recipe.description}</p>
                <p>
                  Ingredients:{" "}
                  {recipe.ingredients.map((item, index) => (
                    <span key={index} className="me-2 fst-italic fw-semibold">
                      {item.name}({item.quantity})
                    </span>
                  ))}
                </p>
              </div>
              <img
                src={recipe.imgURL}
                alt={`img-recipe-${recipe.name}`}
                width="100px"
                style={{ maxWidth: "100px" }}
              />
            </div>
          ))}
        </div>
        <div className="col-md-6">
          {recipe && (
            <>
              <RecipeDetail recipe={recipe} />
            </>
          )}
          {displayForm && (
            <>
              <EditForm addNewRecipe={addNewRecipe} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
