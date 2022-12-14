import { Button } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PaymentStyled } from './PaymentStyled'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Add Credentials to Proceed Payment',
{
 icon:<i class="fas fa-exclamation-triangle"></i>,
  style: {
    borderRadius: '10px',
    background: '#ed092f',
    color: '#fff',
  },
}
);


export default function Payment() {
const [cardNo,setCardNo]=useState("")
const [cvvNo,setCvvNo]=useState("")
const [userNm,setUserNm]=useState("")
const navigate=useNavigate()
    const handleClick=()=>{
        if(cardNo===""||cvvNo===""){
            notify();
           // alert('add Credentails to Proceed')
        }
       else{
        navigate('/thankspage')
       }
    }
  return (
    <>
    <PaymentStyled>
    <div class="container" style={{marginTop:'10%'}}>
        <h1>Confirm Your Payment</h1>
        <div class="second-row" style={{marginBottom:'3%'}}>
            <div class="card-number">
               
                <div class="input-field">
                    {/* <input type="text" placeholder='Card Number'/> */}
                    <select name="months" id="months" style={{width:'100%',height:'45px'}}>
                        <option value="Jan">Debit Card</option>
                        <option value="Feb">Credit Card</option>
                        <option value="Mar">UPI</option>
                      </select>
                </div>
            </div>
        </div>

        <div class="first-row"  style={{marginBottom:'3%'}}>
            <div class="owner">
              
                <div class="input-field">
                    <input type="text" placeholder='UserName' onChange={(event)=>setUserNm(event.target.value)}/>
                </div>
            </div>
            <div class="cvv">
                
                <div class="input-field">
                    <input type="password" placeholder='CVV' onChange={(event)=>setCvvNo(event.target.value)}/>
                </div>
            </div>
        </div>
        <div class="second-row">
            <div class="card-number">
               
                <div class="input-field">
                    <input type="text" placeholder='Card Number' onChange={(event)=>setCardNo(event.target.value)}/>
                </div>
            </div>
        </div>
        <div class="third-row">
           
            <div class="selection">
                <div class="date">
                    <select name="months" id="months">
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                      </select>
                      <select name="years" id="years">
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                      </select>
                </div>
                <div class="cards" style={{display:'flex',marginLeft:'1%'}} >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg " style={{width:'10%',margin:'2%'}}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" style={{width:'10%',margin:'2%'}}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" style={{width:'20%',height:'20%',margin:'2%'}}/>
                    
                </div>
            </div>    
        </div>
        <Button danger style={{height:"50px"}} onClick={handleClick}>Confirm</Button>
    </div>
    <Toaster/>
    </PaymentStyled>
    </>
  )
}
