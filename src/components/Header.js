import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderWrapperStyled } from "./components";
import NewPage from '../pages/NewPage'
import SearchPage from "./SearchPage";
import { dealItems, searchResults, SellerItems } from "./Data";
import Categories from "./Categories";
import { useSelector } from "react-redux";
import NoLogIn from "./NoLogIn";

export default function Header() {
       // const [goCart,setGoCart]=useState(false)
       const addCart =useSelector((state)=>state.addCart.addCart)
 
        const navigate=useNavigate()
        let a=[]
        const NavigateToSearch=(e)=>{
                e.preventDefault();
                setTimeout(()=>{ if(e.target.value){
                     a=searchResults.filter((item)=>{
                        return(
                                item.title.toLowerCase().includes(e.target.value.toLowerCase())
                        )
                        })
                        console.log(a)
                        navigate('/search',{
                                state:{
                                        data:a
                                }
                        })
                 }},1000)
               
              
        }
const AddLocation=()=>{
        window.location.replace('https://www.google.com/maps');      
}
const goToLogin=()=>{
        navigate('/loginpage')
}
  return (
    <>
      <HeaderWrapperStyled>
      <div className='navbarL'>
            <div className='nav_div1'>

                <div className="logosec"><Link to='/'>
                    <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="" />
                    </Link>
                </div>
                <div >
                        <div className='img_nav' onClick={AddLocation}><img  className="map-img" src="https://www.licious.in/img/rebranding/location_icon.svg" alt="" /></div>
                        <div className='map'>Map</div>
                </div>
                <div className='search_bar'>
                <input type='text' className=" header-search" placeholder="Type your favourite Item" onChange={NavigateToSearch}/></div>
                <div className="categorysec">
                        <div className='img_nav img-cat'><img src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="" /></div>
                        {/* <div>Categories</div> */}
                        <div><Categories/></div>
                </div>
                <div onClick={goToLogin} className="loginsec">
                        <div><img src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="" /></div>
                        <div>Login</div>
                        {/* <div><ProfileLogin/></div> */}
                </div>
                <div className="cartsec">
                        <div className="img-cart"><img src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="" /></div>
                       {addCart?<div><NewPage/></div>:<div><NoLogIn/></div>} 
                      
                </div>
            </div>
        </div> 
      </HeaderWrapperStyled>
    </>
  );
}
