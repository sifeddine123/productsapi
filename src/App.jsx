import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((res)=>res.json())
    .then((data)=>{setProducts(data)})
  },[])
  if(!products) return  
  
  return (
    <>
      {
        products.map((product,i)=>{
          return(
            <div key={i}>
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category.name}</p>
          </div>
          )
        })
      }
    </>
  )
}

export default App
