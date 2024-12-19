import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>setProducts(res.data))
  },[])
  
  return (
    <div>
      <h2 className='text-center fs-1 mt-5 w-75 mx-auto pb-4 border-bottom mb-5'>Latest Products</h2>
      <div className="d-flex flex-wrap container mx-auto justify-content-evenly gap-2">
        {products.map((product)=>{
          return(
            <div className="card mb-4  p-2" style={{width:"30%"}}>
              <img src={`${product.image}`} alt="" className="card-img-top" width={200} height={400} />
              <h4 className='text-center mt-2'>{product.title.slice(0,20)}...</h4>
              <p className="mt-2">{product.description.slice(0,90)}...</p>
              <span className="py-3 fs-3 text-center border-top border-bottom">$ {product.price}</span>
              <div className="btns-container d-flex align-items-center justify-content-center flex-wrap gap-3 mt-4 mb-2">
                  <button className='btn btn-dark'>Buy Now</button>
                  <button className='btn btn-dark'>Add to Cart</button>
              </div>  
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products