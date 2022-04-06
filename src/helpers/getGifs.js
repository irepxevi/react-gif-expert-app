import React from 'react'

export const getGifs = async (category) => {

    

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=20&api_key=D8HgTeLo0BZa7dHFu9vMgH8FBpzhfP8l`;
    const resp = await fetch( url )
    const {data} = await resp.json();

    const gifs = data.map( img => {

        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }

    })
    
    return gifs;
    
}
