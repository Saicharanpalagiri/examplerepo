import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Image,
  } from '@chakra-ui/react'
  import {Link, useNavigate} from "react-router-dom"
import { NavMod } from './components'
import { searchResults } from './Data'



export default function NoLogIn() {
    const navigate=useNavigate()
    const goToLogin=()=>{
        navigate('/loginpage')
    }
  return (
   <> <NavMod>
   <Menu>
<MenuButton as={Button}  backgroundColor={'white'}>
  Cart
</MenuButton>


<MenuList className="link_flex">
  {/* <MenuItem minH='48px'> */}
   
      <Button  backgroundColor={'white'}  onClick={goToLogin}>
      <div style={{fontSize:'25px'}}><i class="fa-solid fa-user"></i></div>
    <span style={{margin:'4%',color:'#f01136'}}> 
    
        Log In to Add Items in cart</span>
    
      </Button>
  {/* </MenuItem> */}
 
 
  
</MenuList>


</Menu>
</NavMod>
  </>
  )
}
