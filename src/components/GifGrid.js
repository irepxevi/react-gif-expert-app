import React from 'react'
import { useFetchGifs } from '../hooks/useFechGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({category}) => {

  const { data:images, loading } = useFetchGifs( category );

  //console.log(loading);  

  
  //getGifs();

  return (
      <>
        <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
        
        {loading && <p className='animate__animated animate__flash'>Loading...</p>}

        {<div className='card-grid'>          
            {
              images.map( (img) => (              
                <GifGridItem
                  key = {img.id}
                  { ...img }
                
                />
              ))
            }          
                
          </div>}
      </>
    
  )

}

export default GifGrid