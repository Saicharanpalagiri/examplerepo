import styled from "styled-components";

export const NewPageStyled = styled.div`


.card {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
  max-width: 80%;
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  position: relative;
 justify-content:center;
 align-items:center;
 margin-top:12%;
 margin-left:10%;

 
}
.card h2 {
  margin: 0;
  padding: 0 1rem;
}
.card .title {
  padding: 1rem;
  text-align: right;
  color: green;
  font-weight: bold;
  font-size: 12px;
}
.card .desc {
  padding: 0.5rem 1rem;
  font-size: 12px;
}
.card .actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0.5rem 1rem;
}
.card svg {
  width: 85px;
  height: 85px;
  margin: 0 auto;
}


.card-text {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.title-total {
  padding: 2.5em 1.5em 1.5em 1.5em;
}

path {
  fill: white;
}



.portada {

 height:400px;
 width:500px;
//  background:url("https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/66e96bfe-5abc-2cd8-18a7-01a9eceb2bfa/original/WhatsApp_Image_2022-04-13_at_2.16.31_PM.jpeg");
//  )
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-position: bottom center;
  background-size: cover;
  
}

button {
  border: none;
  background: none;
  font-size: 15px;
  color: white;
  cursor: pointer;
  transition:.5s;
  &:hover{
    color: #4CAF50  ;
    transform: rotate(2deg)
  }
}



`;





export const NewPageStyled2 = styled.div`
.navbarL{
  width: 100%;
  height: 70px;
  /* border: 1px solid red; */
  /* position: fixed; */
  background-color: #fff;

  top:0;
  /* overflow:visible; */
  z-index: 1;
  position: fixed;   
  
}
.nav_div1{
  height:44.73px;
  margin-top: 20px;
  /* border: 1px solid green; */
  display: flex;
  margin-left: 13%;
  margin-right: 13%;
}
.nav_div1>div{
margin: auto;
display: flex;
}
.nav_div1 >div img{
  margin-right: 10px;
}
.leciousLogo{
  margin-left: 50xp;
}
.Login_pointer{
  cursor: pointer;
}
.cart_ptc{
  background-image:url('https://www.bing.com/th?id=A3a2637da7ed806004be6c3d134057a0a&w=99&h=132&c=8&qlt=80&o=6&pid=AWE') ;
  background-color:#D11243 ;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  border: none;
  border-top-color: initial;
  border-top-style: none;
  border-top-width: initial;
  border-right-color: initial;
  border-right-style: none;
  border-right-width: initial;
  border-bottom-color: initial;
  border-bottom-style: none;
  border-bottom-width: initial;
  border-left-color: initial;
  border-left-style: none;
  border-left-width: initial;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  font-weight: 600;
  transition: all 50ms ease-out;
  transition-property: all;
  transition-duration: 50ms;
  transition-timing-function: ease-out;
  transition-delay: 0s;
  box-shadow: 0 0 15pxrgba(0,0,0,.2);
  padding: 12px 30px;
  padding-top: 12px;
  padding-right: 30px;
  padding-bottom: 12px;
  padding-left: 30px;
  height: 56px;
  font-size: 15px!important;

}
.link_flex{
  display: flex;
}
.login_back_img{
   background-image: url('https://static3.bigstockphoto.com/3/9/2/large1500/293515042.jpg'); 
  /* border: 20px solid red; */
  /* background-color: #D11243; */

}
.div_font_size{
  font-size: 10px;
  font-weight: lighter;
}
.div_font_size2{
  font-size: 20px;
  font-weight: lighter;
}
.map_text{
  text-align: center;
  margin: auto;
  font-size: 24px;
  font-weight: 500;
}
.map_input{
  width: '700px';
  margin-top: '500px';
}

.img_nav {
  margin: auto;
}
`;

