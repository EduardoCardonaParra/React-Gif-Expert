import  { useState  } from 'react'
import { AddCategory, GifGrid } from '../components';



export const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['One punch']);

    const onAddCategory = (value) =>{

        if(Categories.includes(value)){
            return;
        }
        setCategories([value,...Categories])


    }


  return (
    <>
        <h1>Gif expert tittle</h1>

        <AddCategory onAddCategory={onAddCategory}/>

            {Categories.map( (c) => 
                (
                    <GifGrid key={c} category={c}/>
                )
            )}
        
    </>
  )
}

