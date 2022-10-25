import { ACTION } from "./actions";

const initState = {
  recipes: [
    {
      id: '1',
      name: "Hamburger",
      description: "A patty of ground meat, typically beef—placed inside a sliced bun or bread roll",
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
      id: '2',
      name: "Beefsteak",
      description: "A flat cut of beef with parallel faces, usually cut perpendicular to the muscle fibers",
      duration: '60',
      imgURL:
        "https://onesteak.vn/wp-content/uploads/2021/03/cach-lam-bo-beefsteak-ngon-tai-ngon.jpg",
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
      id: '3',
      name: "Fried Chicken",
      description: "A dish consisting of chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried.",
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
      name: "Chicken",
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
      name: "Egg",
      unit: '',
      price: 55,
    },
    {
      id: '5',
      name: "Meat",
      unit: 'kg',
      price: 22,
    },
    {
      id: '6',
      name: "Celery",
      unit: 'kg',
      price: 5,
    },
    {
      id: '7',
      name: "Beef",
      unit: 'kg',
      price: 50,
    },
  ],
  shopping: [
    {
      recipeId: '1',
      quantity: 1,
    },
    {
      recipeId: '2',
      quantity: 1,
    },
    {
      recipeId: '3',
      quantity: 2,
    }
  ]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };

    case ACTION.UPDATE_RECIPE: {
      const foundIndex = state.recipes.findIndex(recipe => recipe.id === action.payload.id);
      const newRecipes = [
        ...state.recipes.slice(0, foundIndex),
        action.payload,
        ...state.recipes.slice(foundIndex + 1)
      ];

      return { ...state, recipes: newRecipes };
    }

    case ACTION.REMOVE_RECIPE: {
      const newRecipes = state.recipes.filter((ingdt) => (ingdt.id !== action.payload));
      return { ...state, recipes: newRecipes };
    }

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

    case ACTION.UPDATE_SHOPPING_RECIPE: {
      const foundIndex = state.shopping.findIndex(s => s.recipeId === action.payload.recipeId);

      const newShopping = action.payload.quantity > 0 ? [
        ...state.shopping.slice(0, foundIndex),
        action.payload,
        ...state.shopping.slice(foundIndex + 1)
      ] : state.shopping.filter(s => s.recipeId !== action.payload.recipeId)

      return { ...state, shopping: newShopping };
    }

    default:
      return state;
  }
};

export default rootReducer;
