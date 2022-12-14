import React from 'react'
import { useSelector } from 'react-redux'

export default function CartItems() {
    const products =useSelector((state)=>state.allProducts.products)
   
  return (
    <div>
      <div className="col-4">
       {
        products.map((item)=>{
            return(
                <div>{item.name}</div>
            )
        })
       }
      </div>
    </div>
  )
}
