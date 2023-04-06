import { useEffect, useState } from "react";
import { getGif } from "../helpers/GetGif";

export const useFetchGif = (category) => {


   const [Gifs, setGifs] = useState([]);
   const [IsLoading, setIsLoading] = useState(false)

    const getImages = async() =>{
        setIsLoading(true);
        const newImages = await getGif(category);
    
        setGifs( newImages);
        setIsLoading(false)
    }


    useEffect( () => {
      
       getImages();
       
    }, [category])
  

    return {
        Gifs,
        IsLoading
    }
}
