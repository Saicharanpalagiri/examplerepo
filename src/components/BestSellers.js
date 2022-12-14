import React, { useState } from 'react'
import { Card, List } from 'antd';
import { BestSellersStyled } from './components';
import { SellerItems } from './Data';
import { Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../reduxPart/actions/productsActions';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Log In To Add Items to Cart',
{
  icon:<i class="fa-solid fa-user"></i> ,
  style: {
    borderRadius: '10px',
    background: '#ed092f',
    color: '#fff',
  },
}
);



export default function BestSellers() {
  const products =useSelector((state)=>state.allProducts.products)
  const dispatch=useDispatch();
  const addCart =useSelector((state)=>state.addCart.addCart)
 
 
 const AddToCart=(item)=>{

if(!addCart){
  notify()
  console.log(addCart,'addCart')
  return
}
let c=[...products]
let b=c.filter((obj)=>obj.id===item.id)
if(b.length===0){
  dispatch(setProducts([...products,item]))
}
console.log(products)
 }
      
  return (
    <div>
    <BestSellersStyled>
        <h2>Best Sellers</h2>
 
			<div className='scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2'>
			{
                        SellerItems.map((item)=>{
                            return (<>
                            {/* <div class="col-3" key={item.id}>
                               */}
                               <div class="sellerItem" key={item.id}>
                              
				            <div class="card card-block card-1">
                    <Link to={`/ItemDetails/${item.id}`}>
                                <img src={item.imgSrc} style={{borderRadius:'15px 15px 0px 0px',height:'200px',width:'100%'}}/>
                                </Link>
                                <div style={{margin:'5px',color:'black',textDecoration:'none'}}><b>{item.title}</b></div>
                                <div>{item.desc}</div>
                                <div style={{display:'flex',justifyContent:'space-between',margin:'15px',marginBottom:'0px'}}>
                                    <b style={{color:'red'}} className='mrpCost' >MRP:{item.cost}</b>
                                    <Button type="primary" className='cartbtn' danger onClick={()=>{AddToCart(item)}}>ADD to cart</Button>
                                    </div>
                                    <div style={{marginTop:'10px'}}>
                                    <hr/>
                            <div class="product-message">
                            <div class="icon-message">
                              <img src="https://www.licious.in/img/rebranding/express_delivery.svg" class="scooter"/>
                              <span class="message ">Today <b>6 AM - 8 AM</b></span>
                            </div>
                            </div>
                            </div>
                            </div>
                       
			                </div>

                            </>)
                        })
                    }
 <Toaster />
    </div>
</BestSellersStyled>
</div>
  )
}




