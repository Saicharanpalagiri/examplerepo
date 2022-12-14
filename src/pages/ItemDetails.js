import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { SellerItems } from '../components/Data';
import { Button, Space } from 'antd';
import { setProducts } from '../reduxPart/actions/productsActions';
import { NewPageStyled } from './pages';
import Header from '../components/Header';


export default function ItemDetails() {
    const { productId }=useParams()
    const products =useSelector((state)=>state.allProducts.products)
    // console.log(productId);
    const dispatch=useDispatch();
   
 

 const AddToCart=(item)=>{

dispatch(setProducts([...products,item]))
console.log(products)

 }
    const filterItems= SellerItems.filter((item)=>{
        return item.id===productId
    })
    const itemShow=filterItems[0]
    
  return (
  
  <NewPageStyled>
  <Header/>
<div> <div className="card" style={{height:'400px'}}>

<div className="card-text">

<div className="portada">
    <img  style={{height:'100%',width:'100%',borderTopLeftRadius: '20px',
  borderBottomLeftRadius: '20px'}} src={itemShow.imgSrc}/>



</div>
<div className="title-total" style={{width:'100%'}}>   
  <div className="title">Best Seller</div>
  <h2>{itemShow.title}</h2>

<div className="desc">{itemShow.desc}Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, ad doloremque voluptas maiores temporibus libero quae, repellat eos reiciendis officiis veritatis debitis ratione at accusantium cupiditate, minus facere vero? Dolorem similique, voluptatem officiis ab tempora ea molestias cumque, nisi obcaecati sed, veritatis magni rem eveniet voluptas temporibus praesentium totam placeat!
</div>
<Button type="primary" danger style={{height:'40px',justifyContent:'center',alignItems:'center'}} onClick={()=>{AddToCart(itemShow)}}>Add to cart</Button>


</div>

</div>
</div>
</div>

</NewPageStyled>
  )
}
