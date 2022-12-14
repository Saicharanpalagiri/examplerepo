import styled from "styled-components";

export const HeaderWrapperStyled = styled.div`

.navbarL{
    width: 100%;
    height: 15%;
    background-color: #fff;
    top:0;
    z-index: 100;
    position: fixed; 
   
   box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
   
}
.nav_div1{
    height:40%;
    display: flex;
justify-content:center;
align-items:center;
    
}
.nav_div1>div{
margin:auto;
margin-top:6%;
margin-bottom:2%;
display: flex;
}
.header-search{
    width:100%;
    background: url(https://www.licious.in/img/rebranding/search_icon.svg) no-repeat right;
    background-color:#f8f8f8;
    padding:7px 16px;
    margin:-5px 10px;
    border-radius:10px;
    
}
.map-img{
 height:40px;
}
.map{
    margin-top:10px;
    margin-left:5%;
    
}
.img-cat{
    margin-top:10%;
}
.img-cart{
    margin-top:10%;
}
@media screen and (max-width: 480px) {
    .header-search{
        width:60px;
        
       
    }  
    .navbarL{
       
        height:10%;
        padding:5%;
    }
    .nav_div1{
        margin:0;
        height:40%;
        
        
    }
    .categorysec{
        width:10%;
        margin:0;
    }
    .logosec{
        width:20%;
        margin:0;
    }
    .cartsec{
        width:10%;
    }
    .map{
        margin-top:10%;
        margin-left:0;
    }
}
`;


export const ShopByCategoriesStyled = styled.div`
.categoryCard{
    width:30%;
}
.categories-header1{
  margin-right:80%;
    font-size:160%;
    font-weight:500;
}
.cards-home-img{
    margin-left:20%;
}
.categories-header2{
    
    font-size:100%;
    font-weight:500;
}
.categories-footer{
    margin-left:20%;
    margin-top:3%;
}
.categories-footer-header{
    display:flex;
    justify-content:space-between;
}
.categories-footer-main{
    background:white;
    border-radius:10px;
    align-items:center;
}
.btn-categories-footer{
    margin:10px;
    width:150px;
}
.categories-footer-logo{
    margin:10px;
    width:120px;
}


@media screen and (max-width: 480px) {
    .categoryCard{
        width:100%;
        
    }
    .categories-header1{
        margin-right:0;
    }
    .cards-home-img{
        margin-left:0%;
    }
  }
`;


export const BestSellersStyled = styled.div`
.sellerItem{
    width:25%
}
.scrolling-wrapper{
	overflow-x: auto;
    
}
.scrolling-wrapper::-webkit-scrollbar{
	display:none;
    
}
body{
	background-color: black;
	color: #fff;
	
}

h1{
	font-weight: 700;
	font-size: 3.4em;
}

.subtitle{
	font-size: 1.25em;
	opacity: 0.65;
}

.card-block{
    color:black;
    text-decoration:none;
    
	height: 440px;
	background-color: #fff;
	border: none;
	background-position: center;
	background-size: cover;
	transition: all 0.2s ease-in-out !important;
	border-radius: 24px;
	&:hover{
		transform: translateY(-5px);
		box-shadow: none;
		opacity: 0.9;
	}
}
@media screen and (max-width: 480px) {
    .sellerItem{
        width:50%;
    }
    .cartbtn{
        width:45px;
        margin:0;
        font-size:8px;
        padding:0;
    }
    .mrpCost{
       font-size:10px;
        margin:0;
    }
  }
`;

export const NavMod = styled.div`
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
@media screen and (max-width: 480px) {
    .headerCategory{
        font-size:1px;
        
    }
}

`;

export const LoginPageStyled = styled.div`
.loginforn{
    margin-top:10%;
    margin-left:25%;
    align-items:center;
    justify-content:center;
    width:50%;

}

@media screen and (max-width: 480px) {
    .loginforn{
        margin-top:30%;
        margin-left:10%;
        width:80%;
    }
}
`;

export const SignUpPageStyled = styled.div`
.signform{
    margin-top:10%;
    margin-left:25%;
    align-items:center;
    justify-content:center;
    width:50%;
}
@media screen and (max-width: 480px) {
    .signform{
        margin-top:25%;
        margin-left:10%;
        width:80%;
    }
}
`;


export const SearchPageStyled = styled.div`
.searchCard{
    margin-left:10px;
    width:48%;
    
}
@media screen and (max-width: 480px) {
    .searchCard{
        margin-left:10px;
       width:100%;
        
    }

}
`;
