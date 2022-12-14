import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'

import { NewPageStyled2 } from '../pages/pages';
import { useSelector } from 'react-redux';

export default function CheckOutPage() {
    const products =useSelector((state)=>state.allProducts.products)
    //console.log(products)
    let location =useLocation()
    let b=location.state.data
    const [billItems,setBillItems]=useState([])
   // console.log(location.state.data,'hello')
  return (
 <>
 
 <Header/>
 <div className="container" style={{marginTop:'10%'}}>
 
<h1>Bill Section</h1>
{
    billItems.map((item)=>{
        return (
            <>
            <div>{item.title}</div>
            </>
        )
    })

}
 </div>
 
 </>
  )
}
