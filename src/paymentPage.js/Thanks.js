import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ThanksStyled } from './PaymentStyled'

export default function Thanks() {
    const navigate=useNavigate()
  return (
    <ThanksStyled>
    <div className="thanks-header" >
    <div  className="header-1">
        Payment Successfull !
    </div>
    <div className='header-2'>
    Thanks! Visit Again
    </div>
    <Button danger onClick={()=>navigate('/')}>Redirect To Lucious Home Page</Button>
    </div>
    </ThanksStyled>
  )
}
