import { useEffect, useState } from "react";
import { getGif } from "../helpers/GetGif";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";




export const GifGrid = ({category}) => {

    
    const {Gifs, IsLoading} = useFetchGif(category);
    


    return (
        <>
            <h1>{category}</h1>
            {IsLoading &&
                <h2>Cargando...</h2>
            }
            <div className="card-grid">

                {
                Gifs.map(gif => {
                    return (
                        <GifItem key={gif.id} gif={gif}/>
                        )
                    }
                    )
                }
            </div>
        </>
    )
}
