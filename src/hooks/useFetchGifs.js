

import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {
   
    const [images, setImages] = useState( [] )
    const [loadingImages, setLoadingImages] = useState( true )

    //Cargando imágenes del endpoint la primera vez
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setLoadingImages(false);
    }

    useEffect( () => {
        getImages();
    }, [])
  
  
    return {
        images,
        loadingImages
    }

}

