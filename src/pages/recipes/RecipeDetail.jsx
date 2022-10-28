import React from 'react'
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';
import { getIngredients } from '../../redux/selectors';

function RecipeDetail({ recipe }) {
    const ingredients = useSelector(getIngredients);

    return (
        <div className='text-dark'>
            <img src={recipe.imgURL} alt="" className='w-50 h-50 d-block rounded-1 border border-3 my-3 mx-auto' />
            <div className='p-3 pt-1 w-80'>
                <h2 className='mt-1 text-center text-warning fs-1'>{recipe.name}</h2>
                <h5 className='mt-1 text-center'>Duration: {recipe.duration} mins</h5>
                <h5 className='mt-2 text-center text-break fst-italic fs-6'>{recipe.description}</h5>
                <div className='p-3'>
                    <h5>Ingredients:</h5>
                    {recipe.ingredients.map(item => {
                        const ing = ingredients.find(i => i.id === item.id);
                        return (
                            <div key={item.id} className='border border-1 p-2 m-1 rounded fs-5'>{item?.quantity} {ing?.unit} of {ing?.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default RecipeDetail;