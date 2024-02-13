
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { IsLoading } from "./IsLoading"

export const GifGrid = ({ category }) => {

    const { images, loadingImages } = useFetchGifs( category )

    return (
        <>
            <h3>{category}</h3>
            <IsLoading loadingImages={loadingImages}/>
            <div className="card-grid">
                {
                    images.map( image =>(
                        <GifItem
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
