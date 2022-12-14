import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { setProducts } from '../reduxPart/actions/productsActions'
import Header from './Header'
import ShopByCategories from './ShopByCategories'
import toast, { Toaster } from 'react-hot-toast';
import { SearchPageStyled } from './components'

const notify = () => toast('Log In to Add Items to Cart',
{
  icon:<i class="fa-solid fa-user"></i> ,
  style: {
    borderRadius: '10px',
    background: '#ed092f',
    color: '#fff',
  },
}
);

export default function SearchPage() {
  const { searchName }=useParams()
  let location=useLocation()
  let b=location.state.data
  console.log(location.state.data)
  const products =useSelector((state)=>state.allProducts.products)
  const dispatch=useDispatch();
  const addCart =useSelector((state)=>state.addCart.addCart)
 
  const AddToCart=(item)=>{
    if(!addCart){
      console.log(addCart,'addCart')
      notify()
      return
    }
    let c=[...products]
    let b=c.filter((obj)=>obj.id===item.id)
    if(b.length===0){
      dispatch(setProducts([...products,item]))
    }
    console.log(products)
     }
  return (<>
  <SearchPageStyled>
   {
   b.length>0?<>
  <div className="container" style={{marginTop:'15%'}}>
  <div class="row row-cols-1 row-cols-md-2">
   { b.map(item=>{
      return(
        <>
       <div class="card mb-3 searchCard"  >
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={item.imgSrc} class="card-img" alt="..." style={{height:'80%',width:'100%',marginTop:'10%'}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><b>{item.title}</b></h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p style={{color:'red'}}><b >MRP: </b>Rs.{item.cost}</p>                           
        <img src="https://www.licious.in/img/rebranding/express_delivery.svg" class="scooter"/>
        <Button type="primary" danger onClick={()=>{AddToCart(item)}}>ADD to cart</Button>                                               
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </>
      )
    })}
    </div>
  </div>
   </>:<ShopByCategories/>
   }
   
 <Toaster/>
 </SearchPageStyled>
 </>
  )
}
