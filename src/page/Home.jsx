import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {


    const [input, setInput] = useState("");

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

    console.log("recipe", recipe)


    const inputHandler = (e) => {
        setInput(e.target.value);
    }


    return (
        <>

            <div className='search-input container mx-auto gap-16 flex justify-center py-5 mt-5'>
                <input placeholder='Search a recipe' value={input} onChange={inputHandler} className='border-2 border-black px-5 text-center rounded w-72'></input>
                <button onClick={() => setInput("")} className='bg-slate-950 rounded text-white text-xl px-5 py-2'>Search</button>
            </div>

            <div className='container mx-auto gap-16 flex flex-wrap p-10'>

                {
                    recipe.filter((recipe => {
                        if (input == "") {
                            return recipe;
                        }
                        else if (recipe.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
                            return recipe;
                        }
                    })).map((recipe) => (
                        recipe.photoUrl ?
                            <Link to={`/detail/${recipe.id}`}>
                                <div key={recipe.id} className='w-[350px] h-[350px] flex flex-col items-center justify-around
                             bg-slate-950 py-10 px-10 text-white text-center rounded hover:cursor-pointer'
                                >
                                    <img src={recipe.photoUrl} alt='' className='w-[220px] h-[250px] rounded mb-4' />
                                    <div className=''>{recipe.title}</div>
                                </div>
                            </Link>
                            :
                            null
                    ))
                }

            </div>


        </>
    )
}

export default Home
