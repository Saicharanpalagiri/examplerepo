import React from 'react'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Bill from '../components/Bill';
import CheckOutPage from '../components/CheckOutPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import Profile from '../components/Profile';
import SearchPage from '../components/SearchPage';
import SignUpPage from '../components/SignUpPage';
import Slider from '../components/Slider';
import Home from '../pages/Home';
import ItemDetails from '../pages/ItemDetails';
import NewPage from '../pages/NewPage';
import Payment from '../paymentPage.js/Payment';
import Thanks from '../paymentPage.js/Thanks';


export default function AppRoutes() {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/Slider" element={<Slider/>}/>
      <Route path="/ItemDetails/:productId" element={<ItemDetails/>}/>
      <Route path="/newpage" element={<NewPage/>}/>
      <Route path="/checkout" element={<CheckOutPage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/bill" element={<Bill/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signuppage" element={<SignUpPage/>}/>
      <Route path="/loginpage" element={<LoginPage/>}/>
      <Route path="/paypage" element={<Payment/>}/>
      <Route path="/thankspage" element={<Thanks/>}/>
    </Routes>
    
    </>
  )
}
