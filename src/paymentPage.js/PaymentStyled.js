import styled from "styled-components";

export const PaymentStyled = styled.div`


.container{
    width: 50%;
    height: 50%;
   
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 40px;
    justify-content:space-around;
    
}

.container h1{
    text-align: center;
    color: #ed092f;
  font-size:180%;
    font-weight:600;
    margin-bottom:5%;
    font-style:italic;
}

.first-row{
     display: flex;
}

.owner{
    width: 100%;
    margin-right: 40px;
}

.input-field{
    border: 1px solid #999;
}

.input-field input{
    width: 100%;
    border:none;
    outline: none;
    padding: 10px;
}

.selection{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.selection select{
    padding: 10px 20px;
}

a{
    background-color: #ed091f;
    color: white;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px;
    font-size: 18px;
    transition: 0.5s;
}

a:hover{
    background-color: dodgerblue;
}

.cards img{
    width: 100px;
}
`;

export const ThanksStyled = styled.div`
.thanks-header{
    margin-top:10%;
}
.header-1{
    margin-top:15%;
    font-weight:600;
    font-size:220%;
    color: #ed092f;
    }
.header-2{
    margin-top:5%;
    margin-bottom:3%;
}
`;