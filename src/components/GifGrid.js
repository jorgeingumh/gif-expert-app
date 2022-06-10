import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    
    // const [gifs, setGifs] = useState([])
    const {data:images, loading} = useFetchGifs(category);

    return (
        <div className="card animate__animated animate__fadeIn">
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
        { <div className='card-grid'>
            {
                images.map( img => {
                    return <GifGridItem
                        key={img.id}
                        {...img} />
                } )
                }
        </div> }
        </div>
  )
}
