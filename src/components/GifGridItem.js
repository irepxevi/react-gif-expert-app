import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    //console.log(id, title, url);

    return (    
        <div className='card animate__animated animate__fadeIn'>
            <div className='card-wrapper'>
                <img src={ url } alt={ title }></img>
                <p>{ title }</p>
            </div>
            
        </div>
    )
}
