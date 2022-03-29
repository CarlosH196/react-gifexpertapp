import React, {useState} from 'react'; 
import {AddCategory} from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertapp = () => {
    //const categories = ['one punch','samurai','dragon'];

    const [categories, setCategories] = useState(['one punch' ]);

    //const handleAdd=()=>{ 
    //    setCategories( [...categories,'dos']);
   // }

    return (
        <>
            <h2>gif </h2> 
            <AddCategory setCategories= {setCategories}/>
       {/*  <button onClick={handleAdd}>Agregar</button> */}
            <ul>
                {
                    /* categories.map(category =>{
                        return <li key={category}> {category}</li>
                    }) */
                    categories.map(category => (
                        <GifGrid
                        key={category}
                        category = {category}/>
                    ))
                }
            </ul>
        </>
    );
}

export default GifExpertapp;
