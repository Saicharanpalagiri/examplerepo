import React, { useState } from 'react'
import { BoxContainer } from './BoxContainer'
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setAddCart } from '../reduxPart/actions/productsActions';
import { LoginPageStyled } from './components';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Add correct Credentials to Log In',
{
 icon:<i class="fas fa-exclamation-triangle"></i>,
  style: {
    borderRadius: '10px',
    background: '#ed092f',
    color: '#fff',
  },
}
);

const notify2 = () => toast('Add valid email and password',
{
 icon:<i class="fas fa-exclamation-triangle"></i>,
  style: {
    borderRadius: '10px',
    background: '#ed092f',
    color: '#fff',
  },
}
);

export default function LoginPage() {
    const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const addCart =useSelector((state)=>state.addCart.addCart)
 
  const dispatch=useDispatch();

  const [flag, setFlag] = useState(false);
  const navigate=useNavigate()

  //const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();

    let pass,mail;
    let notesObj=[]
    let notes = localStorage.getItem("liciousAccount");
   if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
    mail=notesObj[0].email
    pass=notesObj[0].password
  }

  if (!emaillog || !passwordlog) {
    notify2()
    setFlag(true);
    console.log("EMPTY");
  } else if (passwordlog !== pass || emaillog !== mail) {
    notify()
    setFlag(true);
  } else {
    //setHome(!home);
    setFlag(false);
    dispatch(setAddCart(!addCart))
    navigate('/')
  }
   
  }

  return (
    <LoginPageStyled>
    <div>
 
        <form onSubmit={handleLogin}  className="loginforn" >
        {/* style={{marginTop:'12%',marginLeft:'25%',alignItems:'center',justifyContent:'center',width:'50%'}} */}
          <h1 style={{fontWeight:'700',fontSize:'40px',fontstyle:'italic',color:'#d41535'}} >Login</h1>
          <div className="form-group" style={{margin:'3%'}}>
            <br/>
            <label style={{fontSize:'20px'}}>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group" style={{margin:'3%'}}>
            <label style={{fontSize:'20px'}}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
          <Button className='danger' style={{margin:'5%',color:'black'}} danger onClick={handleLogin} >
            Login
            </Button>
         
          <Link to="/signuppage">
          <p>
            <b>New to Licious</b>| <span style={{color:'green'}}>Create an Account</span></p>
          </Link>
        </form>
     <Toaster/>
    </div>
    </LoginPageStyled>
  )
}
