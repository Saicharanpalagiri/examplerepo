import React, { useState } from 'react'
import { BoxContainer } from './BoxContainer'
import { Form, Alert } from "react-bootstrap";
import LoginPage from './LoginPage';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { SignUpPageStyled } from './components';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('All Details are necessary for Register',
{
 icon:<i class="fas fa-exclamation-triangle"></i>,
  style: {
    borderRadius: '10px',
    background: '#ed092f',
    color: '#fff',
  },
}
);


export default function SignUpPage() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
 
  const [flag, setFlag] = useState(false);
  
  const navigate=useNavigate()


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone ) {
      notify()
      setFlag(true);
    } else {
      setFlag(false);
      //new
      let notesObj=[]
      let myObj = {
        email: email,
        password:password,
      }
      notesObj.push(myObj)
      localStorage.setItem("liciousAccount", JSON.stringify(notesObj));
 
    
      //console.log("Saved in Local Storage");
      navigate('/loginpage')
      
    }
  }

  function handleClick() {
    //setLogin(!login);
    console.log('j')
  }

  return (
    <SignUpPageStyled>
    <div>
          {" "}
        
            <form className="signform " onSubmit={handleFormSubmit} >

            {/* style={{marginTop:'10%',marginLeft:'25%',alignItems:'center',justifyContent:'center',width:'50%'}}
             */}
              <h1  style={{fontWeight:'700',fontSize:'40px',fontstyle:'italic',color:'#d41535'}} >Register</h1>

              <div className="form-group" style={{margin:'3%'}}>
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group" style={{margin:'3%'}}>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group" style={{margin:'3%'}}>
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group" style={{margin:'3%'}}>
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

             

             
               <Button className='danger' style={{marginTop:'0%',color:'black'}} danger onClick={handleFormSubmit} >
            Register
            </Button>
              <p onClick={handleClick} className="forgot-password text-right" style={{marginTop:'10px'}}>
                <Link to='/loginpage'>
               <b>Already registered</b>{" "} |<span  style={{color:'green'}}> Log in?</span>
                </Link>
              </p>
              {/* {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )} */}
            </form>
         <Toaster/>
        </div>
        </SignUpPageStyled>
  )
}
