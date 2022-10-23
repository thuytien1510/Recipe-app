import { ACTION } from "./actions";

const initState = {
  recipes: [
    {
      id: 1,
      name: "Hamburger1",
      description: "Hamburger description1",
      duration: '18',
      imgURL:
        "https://www.thatlangon.com/wp-content/uploads/2021/01/hamburger-thatlangon-500x500.jpg",
      ingredients: [
        {
          id: '1',
          quantity: 1,
        },
        {
          id: '4',
          quantity: 1,
        },
        {
          id: '5',
          quantity: 1,
        },
      ],
    },
    {
      id: 2,
      name: "beefsteak",
      description: "beefsteak description2",
      duration: '60',
      imgURL:
        "https://www.thatlangon.com/wp-content/uploads/2021/01/hamburger-thatlangon-500x500.jpg",
      ingredients: [
        {
          id: "7",
          quantity: 2,
        },
        {
          id: "6",
          quantity: 5,
        },
      ],
    },
    {
      id: 3,
      name: "fried chicken",
      description: "gà chiên ròn nhó",
      duration: '60',
      imgURL:
        "https://bizweb.dktcdn.net/100/420/256/files/cach-chien-ga-kfc-5.jpg?v=1623231923691",
      ingredients: [
        {
          id: '2',
          quantity: 1,
        },
      ],
    },
  ],
  ingredients: [
    {
      id: '1',
      name: "Bread",
      unit: '',
      price: 80,
    },
    {
      id: '2',
      name: "chicken",
      unit: '',
      price: 100,
    },
    {
      id: '3',
      name: "Apples",
      unit: '',
      price: 20,
    },
    {
      id: '4',
      name: "egg",
      unit: '',
      price: 55,
    },
    {
      id: '5',
      name: "meat",
      unit: 'kg',
      price: 22,
    },
    {
      id: '6',
      name: "celery",
      unit: 'kg',
      price: 5,
    },
    {
      id: '7',
      name: "beef",
      unit: 'kg',
      price: 50,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };

    case ACTION.UPDATE_RECIPE:
      const recipes = [...state.recipes];
      const index = recipes.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      recipes[index] = action.payload;
      return { ...state, recipes: recipes };

    case ACTION.REMOVE_RECIPE:
      const recipeList1 = [...state.recipes];
      const removeRecipe = recipes.find(
        (recipe) => recipe.id === action.payload.id
      );
      recipeList1.slice(removeRecipe, 1);
      return { ...state, recipes: recipeList1 };

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
