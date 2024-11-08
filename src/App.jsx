import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState(0)
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((res)=>res.json())
    .then((data)=>{setProducts(data)})
  },[])
  console.log(products[0]);
  
  return (
    <>
      <App products={products} />
    </>
  )
}

export default App
