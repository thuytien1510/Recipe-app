import { ACTION } from "./actions";

const initState = {
  recipeList: [
    {
      id: 1,
      name: "Hamburger1",
      description: "Hamburger description1",
      imgURL:
        "https://www.thatlangon.com/wp-content/uploads/2021/01/hamburger-thatlangon-500x500.jpg",
      ingredients: [
        {
          name: "bread",
          quantity: 1,
        },
        {
          name: "meat",
          quantity: 1,
        },
        {
          name: "egg",
          quantity: 1,
        },
      ],
    },
    {
      id: 2,
      name: "beefsteak",
      description: "beefsteak description2",
      imgURL:
        "https://www.thatlangon.com/wp-content/uploads/2021/01/hamburger-thatlangon-500x500.jpg",
      ingredients: [
        {
          name: "beef",
          quantity: 2,
        },
        {
          name: "celery",
          quantity: 5,
        },
      ],
    },
    {
      id: 3,
      name: "fried chicken",
      description: "gà chiên ròn nhó",
      imgURL:
        "https://bizweb.dktcdn.net/100/420/256/files/cach-chien-ga-kfc-5.jpg?v=1623231923691",
      ingredients: [
        {
          name: "chicken",
          quantity: 1,
        },
      ],
    },
  ],
  ingredients: [
    {
      id: 1,
      name: "Bread",
      price: 80,
    },
    {
      id: 2,
      name: "chicken",
      price: 100,
    },
    {
      id: 3,
      name: "Apples",
      price: 20,
    },
    {
      id: 4,
      name: "egg",
      price: 55,
    },
    {
      id: 5,
      name: "meat",
      price: 22,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.ADD_RECIPE:
      return {
        ...state,
        recipeList: [...state.recipeList, action.payload],
      };

    case ACTION.UPDATE_RECIPE:
      const recipeList = [...state.recipeList];
      const index = recipeList.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      recipeList[index] = action.payload;
      return { ...state, recipeList: recipeList };

    case ACTION.REMOVE_RECIPE:
      const recipeList1 = [...state.recipeList];
      const removeRecipe = recipeList.find(
        (recipe) => recipe.id === action.payload.id
      );
      recipeList1.slice(removeRecipe, 1);
      return { ...state, recipeList: recipeList1 };

    case ACTION.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };

    case ACTION.UPDATE_INGREDIENT: {
      const foundIndex = state.ingredients.findIndex(ingdt => ingdt.id === action.payload.id);
      const newIngredients = [
        ...state.ingredients.slice(0, foundIndex),
        action.payload,
        ...state.ingredients.slice(foundIndex + 1)
      ];

      return { ...state, ingredients: newIngredients };
    }

    case ACTION.REMOVE_INGREDIENT: {
      const newIngredients = state.ingredients.filter((ingdt) => (ingdt.id !== action.payload));
      return { ...state, ingredients: newIngredients };
    }

    default:
      return state;
  }
};

export default rootReducer;
