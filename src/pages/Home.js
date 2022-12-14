import React from 'react'
import { useSelector } from 'react-redux'
import BestSellers from '../components/BestSellers'
import CartItems from '../components/CartItems'
import CheckoutBlog from '../components/CheckoutBlog'
import ExploreByCategories from '../components/ExploreByCategories'
import Header from '../components/Header'
import NewsItems from '../components/NewsItems'
import ShopByCategories from '../components/ShopByCategories'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
       
     
      <div>
        <ShopByCategories h2tag={"Shop by categories"}/>
      </div>
     <BestSellers/>
     <CheckoutBlog/>
      <div><ExploreByCategories/></div>
      <NewsItems/>
      {/* <CartItems/> */}
    </div>
  )
}
