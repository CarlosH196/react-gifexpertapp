import React,{useEffect,useState} from 'react';
//import {GifGridItem} from './GifGridItem';
import GifGridItem from './GifGridItem';
import {getGifs} from '../helpers/getGifs';

const GifGrid = ({category}) => {

   // const [count, setCount] = useState(0);

   const [images, setImages] = useState([]);
    useEffect(() =>{
      //  getGifs();
      getGifs(category)
      .then(setImages);
    },[ category]) 

/* const getGifs = async()=>{
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=cCp67mfFxFOb82mhHJxFQ6th6HWU3M3v`

    const resp = await  fetch(url);
    const {data} = await resp.json();

    const gifs = data.map ( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    console.log(gifs);
    setImages(gifs);
} */

//getGifs();


    return (
        <>
        <h3>{category}</h3>
        <div className='card-grid'>
           
                {                  

                    images.map(img => (
                          <GifGridItem
                            key={img.id}
                            {...img} />                 
                             
                        
                    ))
                }  
                               
            {/*        { 
                    <><ul>
                    {images.map(img => {
                        return <li key={img.id}> {img.title}</li>;
                    })}
                </ul>
                
                <select className="form-select" name='title' >
                        {images.map(ap => 
                        <option key={ap.id} value={ap.id}>
                            {ap.title}
                        </option>)}
                    </select>
                    
                    </>
                   
                   }                
           
                 

             <ul>                
                   { images.map(img =>{
                        return <li key={img.id}> {img.title}</li>
                    })}                 
            </ul>  
            
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}></button> */}
        </div>
        </>
    );
}

export default GifGrid;
