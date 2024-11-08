import { useState } from 'react'
import './App.css'

function App({products}) {
  
  return (
    <>
      {
        products.map(function(product,i){
          return (
            <div key={i}>
              <p>{product.id}</p>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          )
        })
      }    
    </>
  )
}

export default App
