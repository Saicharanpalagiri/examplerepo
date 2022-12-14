import React from 'react'
import { Card, Col, Row } from 'antd';
import { dealItems, searchResults } from './Data';
import { Button, Space } from 'antd';
import { ShopByCategoriesStyled } from './components';
import { useNavigate } from 'react-router-dom';


export default function ShopByCategories(props) {
  const navigate=useNavigate()
  let a=[]
  const searchItem=(searchItem)=>{
    setTimeout(()=>{
      if(searchItem){
        a=searchResults.filter((item)=>{
                         return(
                                 item.title.toLowerCase().includes(searchItem.slice(0,3).toLowerCase())
                        )
                        })
                        console.log(a)
                        navigate('/search',{
                                state:{
                                        data:a
                                      }
                                })
      }


    },500)
   
  }

  return (
    <ShopByCategoriesStyled>
    <div>
      <div className='categories-header'  style={{margin:'3%'}}>
      <h1 className="categories-header1">Shop By Categories</h1>
      <h5 className="categories-header2">Fresh meat for you</h5>
      </div>
      <div class="container">
  <div class="row g-2">
    
    {
  dealItems.map((item)=>{
   return  (<>
   <div class="categoryCard" key={item.id} onClick={()=>searchItem(item.name)} >
      <div class="p-3 border">
      <div  >
            <div class="menu-card shadow">
              <img src={item.imgSrc} class="explore-img" alt=""/>
              <h1 class="menu-name">{item.name}</h1>
            </div>
      </div>
      </div>
    </div>
   
   
   </>)
  })
}

    
   
  </div>
</div>

<div class="container categories-footer">
    
      <div class="col-8 categories-footer-main" >
        <div class="hp-ll-nm-banner-top categories-footer-header" >
          <img src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg" 
          className="hp-ll-banner-licious-nm-logo categories-footer-logo" />
          <Button type="primary btn-categories-footer" danger >
      JOIN NOW
    </Button>
          </div>
          <div class="hp-ll-nm-banner-bottom">
          <hr/>
            <b>Join MEATOPIA to get free delivery on all orders with cart value more than Rs.99.</b>
          </div> 
        </div>
</div>
     


               <div className='container'>
               <img data-lazy=""  className="cards-home-img"  style={{marginTop:'10px'}} class="interlace-img" src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/a5372f18-3f0a-a801-0160-cb20957f3acd/original/static-bank-units-nov-web.jpg?format=webp"></img>
    
                
                </div> 
    
    </div>
    </ShopByCategoriesStyled>
  )
}


