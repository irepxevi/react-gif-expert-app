import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState([]);

  const handleAdd = () => {
       
        //setCategories( [...categories, 'Steins Gate'] );

        //setCategories( cats => [...cats, 'SteinsGate'] );

  }

  return (
      <>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories = { setCategories }/>       
        
        <ol>
          { 
            categories.map( category => (

              <GifGrid 
                key = {category}
                category={ category }
              />

            ))
          
          }
        </ol>        
      </>
    
  )

}

export default GifExpertApp