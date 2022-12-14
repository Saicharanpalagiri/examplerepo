import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BillStyled } from './BillStyle'

export default function Bill() {
    const navigate=useNavigate()
    const products =useSelector((state)=>state.allProducts.products)
    const [totalAmount,setTotalAmount]=useState(0)
 // console.log(products)
    let location =useLocation()
    let b=location.state.data
   // let amt=location.state.amt
  //  console.log(b)
    const [billItems,setBillItems]=useState(products)
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
let No=1;

useEffect(()=>{setBillItems(products)
    let total=0
    if(billItems.length){
        total = billItems.reduce((acc, elem) => {
          return acc + (+(Number(elem.cost)*Number(elem.Qty)))
          
        },0)}
   //}
        setTotalAmount(total)
},[products.length])

  return (
    <>
    <BillStyled>
    <div class="page-content container" style={{marginTop:'10%'}}>
    <div class="page-header text-blue-d2">
        <h1 class="page-title text-secondary-d1">
            Invoice
            <small class="page-info">
                <i class="fa fa-angle-double-right text-80"></i>
                ID: #111-222
            </small>
        </h1>

       
    </div>

    <div class="container px-0">
        <div class="row mt-4">
            <div class="col-12 col-lg-12">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center text-150">
                            <i class="fa fa-book fa-2x text-success-m2 mr-1"></i>
                            <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="" />
                            <span class="text-default-d3">
                            </span>
                        </div>
                    </div>
                </div>
               

                <hr class="row brc-default-l1 mx-n1 mb-4" />

                <div class="row">
                    <div class="col-sm-6">
                        <div>
                            <span class="text-sm text-grey-m2 align-middle">To:</span>
                            <span class="text-600 text-110 text-blue align-middle"> Licious.in</span>
                        </div>
                        <div class="text-grey-m2">
                            <div class="my-1">
                                Marthali, Bangalore
                            </div>
                            <div class="my-1">
                                karnataka, India
                            </div>
                            <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">111-111-111</b></div>
                        </div>
                    </div>
                 

                    <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr class="d-sm-none" />
                        <div class="text-grey-m2">
                            <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                Invoice
                            </div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span>#111</div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span>{today}</div>

                            <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status: </span>unpaid<span class="badge badge-warning badge-pill px-25">Unpaid</span></div>
                        </div>
                    </div>
                   
                </div>

                <div class="mt-4">
                    <div class="row text-600 text-white bgc-default-tp1 py-25">
                        <div class="d-none d-sm-block col-1">#</div>
                        <div class="col-9 col-sm-5">Description</div>
                        <div class="d-none d-sm-block col-4 col-sm-2">Qty</div>
                        <div class="d-none d-sm-block col-sm-2">Unit Price per Qty</div>
                        <div class="col-2">Amount</div>
                    </div>

                    <div class="text-95 text-secondary-d3">
                       
                        {
                            billItems.map((item)=>{
                                return(
                                    <>
                                     <div class="row mb-2 mb-sm-0 py-25 bgc-default-l4" key={No}>
                            <div class="d-none d-sm-block col-1">{No++}</div>
                            <div class="col-9 col-sm-5">{item.title}</div>
                            <div class="d-none d-sm-block col-2">{item.Qty}</div>
                            <div class="d-none d-sm-block col-2 text-95">Rs.{item.cost}</div>
                            <div class="col-2 text-secondary-d2">Rs.{Number(item.Qty)*Number(item.cost)}</div>

                            
                        </div>
                       
                      
                                    </>
                                )
                            })

                        }
                    </div>

                    <div class="row border-b-2 brc-default-l2"></div>

                 
                    

                    <div class="row mt-3">
                        <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                           

                            <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div class="col-7 text-right">
                                    Total Amount
                                </div>
                                <div class="col-5">
                                    <span class="text-150 text-success-d3 opacity-2">{totalAmount}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <span class="text-secondary-d1 text-105">Thank you for your business</span>
                        <Button class="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0" danger onClick={()=>navigate('/paypage')}>Pay Now</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</BillStyled>
    </>
  )
}

