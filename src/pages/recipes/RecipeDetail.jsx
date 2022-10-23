import React from 'react'
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { getIngredients } from '../../redux/selectors';
const { Option } = Select;

const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

function RecipeDetail({ recipe }) {
    const ingredients = useSelector(getIngredients);

    return (
        <div className='text-dark  card'>
            <img src={recipe.imgURL} alt="" className='w-50 h-50 d-block rounded-1 border border-3 my-3 mx-auto' />
            <div className=' p-3 pt-1 w-80'>
                <h2 className='mt-1 text-center text-warning'>{recipe.name}</h2>
                <h4 className='mt-1 text-center'>Duration: {recipe.duration} mins</h4>

                <h5 className='mt-2 text-center'>{recipe.description}</h5>

                <div className='border border-1 p-3 rounded-5'>
                <h5>Ingredients:</h5>
                {recipe.ingredients.map(item => {
                    const ing = ingredients.find(i => i.id === item.id);
                    return (
                        <div className='border border-1 p-2 m-1 rounded fs-5' >{item?.quantity} {ing?.unit} of {ing?.name}</div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}


export default RecipeDetail;