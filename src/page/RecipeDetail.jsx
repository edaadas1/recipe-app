import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetail = () => {


    const { id } = useParams();

    const [recipe, setRecipe] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.sampleapis.com/recipes/recipes');
                const result = await response.json();
                console.log(result);
                setRecipe(result)
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

    }, [])



    return (
        <div>
            {
                recipe?.filter(recipe => recipe.id == id).map((recipeee) => (
                    <div key={recipeee.id} className='flex items-center gap-5 mt-6 px-20'>
                        <div className='flex flex-col justify-around w-2/3'>
                            <div>{recipeee.title}</div>
                            <div className='flex gap-3 mt-3'><p>Cuisine : </p> {recipeee.cuisine}</div>
                            <div className='mt-3'><p>Ingredients : </p>{recipeee.ingredients}</div>
                            <div className='mt-3'><p>Directions : </p>{recipeee.directions}</div>
                            <div>{recipeee.title}</div>
                        </div>
                        <img src={recipeee.photoUrl} alt="" className='h-[500px] w-1/3' />
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeDetail
