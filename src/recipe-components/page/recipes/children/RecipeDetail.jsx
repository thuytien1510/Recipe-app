import React from 'react'
import 'antd/dist/antd.css';
import { Select } from 'antd';
import '../StyleRecipeComponent.css'
const { Option } = Select;

const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

export default function ({ recipe }) {
    console.log(recipe, 'recipe')
    return (
        <div className='text-dark  card'>
            <img src={recipe.imgURL} alt="" className='w-50 h-50 d-block rounded-1 border border-3 m-3'/>
            <div className=' p-3 pt-1 w-80'>
            <h2 className='mt-1'>{recipe.name}</h2>
            <Select className='fs-5'
                labelInValue
                defaultValue={{
                    value: '',
                    label: 'Manage Recipe',
                }}
                style={{
                    width: 300,
                }}
                onChange={handleChange}
            >
                <Option value="toShoppingList"> <a href="/shopping-list">To ShoppingList</a></Option>
                <Option value="EditRecipe">Edit Recipe</Option>
                <Option value="deleteRecipe">Delete Recipe</Option>
            </Select>
            <h4 className='mt-2'>{recipe.description}</h4>
            {recipe.ingredients.map(item=>(
                <div className='border border-1 p-2 m-1 rounded fs-5' >{item.name} - {item.quantity}</div>
            ))}
            
            </div>


        </div>
    )
}
