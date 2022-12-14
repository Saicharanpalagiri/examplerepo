import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Input,
  useDisclosure,
  DrawerCloseButton,
  Box,
  Text,
  Stack,
  Heading,
  useColorModeValue,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";
//import navMod from "../Components/navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "@chakra-ui/icons";
//import cartprod from "../Pages/cartprod.jpg";
//import { deleteProductCart } from "../Redux/ProductReducer/action";
import { useNavigate } from "react-router-dom";
import { NewPageStyled2 } from "./pages";
import { setProducts } from "../reduxPart/actions/productsActions";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  
  const [amount, setAmount] = useState(0);
  const cart = useSelector((state) =>state.allProducts.products);
  const [cartNew,setCartNew]=useState([])
  let [incItems,setIncItems]=useState([])
  
  //console.log(cartNew,'cartnew')
  // setCartNew(cart)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [Qnty,setQnty]=useState(0)
  const removeProduct =(id) => {
    console.log(id)
    let NotRemovedItems=cartNew.filter((item)=>{
      return item.id!==id.id
    })
    let removedItem=cartNew.filter((item)=>{
      return item.id===id.id
      })
      setAmount(amount-Number( removedItem[0].cost))
     setCartNew(NotRemovedItems)
     dispatch(setProducts([...NotRemovedItems]))
  }; 
  
  const checkoutpage=(e)=>{
    e.preventDefault();
    navigate('/bill',{
      state:{
              data:cartNew,
              amt:amount
      }
})
  }
  let item1=[]
  const handleIncrement=(id)=>{
    let newItems=cartNew.filter((item)=>{
      return item.id!==id.id
    })

   let increasedItem=cartNew.filter((item)=>{
    return item.id===id.id
    })
    increasedItem[0].Qty=Number(increasedItem[0].Qty)+1
   setAmount(amount+Number( increasedItem[0].cost))
   setIncItems([...newItems,increasedItem])
  //dispatch(setProducts([...newItems,increasedItem]))
  }

  const handleDecrement=(id)=>{
    let NotInDecItems=incItems.filter((item)=>{
      return item.id!==id.id
    })
    let DecreasedItem=cartNew.filter((item)=>{
      return item.id===id.id
      })
      //console.log(DecreasedItem[0])
      if(DecreasedItem[0].Qty>1){
       
        DecreasedItem[0].Qty=Number(DecreasedItem[0].Qty)-1
     // {console.log(DecreasedItem)} 
      setAmount(amount-Number( DecreasedItem[0].cost))
      //dispatch(setProducts([...NotInDecItems,DecreasedItem[0]]))
     // setIncItems([...NotInDecItems,DecreasedItem])
      //console.log(DecreasedItem[0])
      }
      else{
        console.log('less than Zero')
      }
    
  }
  
  useEffect(() => {
    setCartNew(cart)
   
   //console.log(cart)
    if(cart.length){
      const total = cart.reduce((acc, elem) => {
        return acc + (+elem.cost)
        
      },0)
      setAmount(total)  
    }
    
   
   // console.log(cart.length)
    // return ()=>{setCartNew(incItems)}
    //   dispatch(setProducts(incItems)
   // return(()=>{dispatch(setCartNew(incItems))})
  }, [cart.length]);

 
  return (
    <>
    <NewPageStyled2>
      <div onClick={onOpen} className="Login_pointer">
        cart
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Order Summery</DrawerHeader>
          <DrawerBody>
            <Box
              bg="#417505"
              color={"white"}
              fontSize="12px"
              padding={"1px"}
              pl="10px"
            >
              
              <Text>
                Your cart value is less than ₹399 & delivery charge applies
              </Text>
            </Box>
            <Box>
              {cartNew.length &&
                cartNew.map((product) => {
                  return (
                    <CartItem
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.cost}
                      image={product.imgSrc}
                      Qty={product.Qty}
                     handleIncrement={handleIncrement}
                     handleDecrement={handleDecrement}
                     removeProduct={removeProduct}
                    //   removeProduct={removeProduct}
                    />
                  
                  );
                })}
            </Box>
            <Text mt="10px" mb="10px">
              Stop paying delivery charges. Join Meatopia today!
            </Text>
            <Button
              bg="#ffdc93"
              w="full"
              height={"50px"}
              border="1px solid red"
              borderRadius={"5px"}
            >
              Join Now
            </Button>
            {/* <Image
        // src={cartprod}
        alt="Dan Abramov"
        size="md"
        mt="20px"
        boxShadow={"rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"}
      /> */}
            <Box border="1px dotted grey" h="150px" mt="10px" boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}>
              <Text>BILL DETAILS</Text>
              <Flex justifyContent={"space-between"} m="5px">
              <Text>Subtotal</Text>
              <Text>{amount}</Text>
              </Flex>
              <Flex justifyContent={"space-between"} m="5px">
              <Text>Delivery Charge</Text>
              <Text>0</Text>
              </Flex>
              <Flex justifyContent={"space-between"} m="5px">
              <Text>Discount</Text>
              <Text>0</Text>
              </Flex>
              <Divider color="black" />              
              <Flex justifyContent={"space-between"} m="5px">
              <Text>Total</Text>
              <Text>₹{amount}</Text>
              </Flex>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3}>
              Total:₹{amount}
            </Button>
            <Button variant="outline" mr={3} style={{background:'orange',padding:'15px',width:'60%'}} onClick={checkoutpage}>
             Proceed to CheckOut
            </Button>
            <Button colorScheme="D11243" className="cart_ptc" onClick={() => {
              onClose()
            //   navigate('/address')
            }}>
              Procees to checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </NewPageStyled2>
    </>
  );
};

export default Cart;

function CartItem({
  key,
  id,
  title,
  price,
  image,
  Qty,
  handleIncrement,
  handleDecrement,
  removeProduct
  
//   removeProduct,
}) 

{
    const AddOneMore=(Qty)=>{
       //setQty(Number(Qty)+1)
       console.log(Qty);
      }
  return (
    <Box
      // border={"0.2px solid gray"}
      ml="200px"
      rounded="lg"
      width={"fit-content"}
      margin="auto"
      mt="1rem"
      w="400px"
    >
      <Box height="90px" boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"} p={"10px"} pr="10px">
        <Flex direction={"row"} justifyContent="space-between">
          <Box width={"70%"}>
            <Text>{title}</Text>
          </Box>
          {/* <CloseIcon onClick={() => removeProduct(id)}/> */}
        </Flex>
        <Flex direction={"row"} justifyContent="space-between" mt={"10px"}>
          <Flex direction={"row"}>
            <Box borderRadius="5px" >
            <div className="addRemoveItems" style={{display:'flex',justifyContent:'space-between'}}>
           
            <button onClick={()=>handleIncrement({id})}>+</button>
            <span style={{marginLeft:'20px'}}>{Qty}</span>
            <button onClick={()=>handleDecrement({id})}><span style={{marginLeft:'20px'}}>-</span></button>
        </div>
            </Box>
            <Box ml="10px" color={"#d11243"} fontSize="sm" fontWeight={600}>
              MRP: ₹{price}
             
            </Box>
           
            {/* <i class="fa fa-remove" style="font-size:48px;color:red"></i> */}
          </Flex>
          {/* <Flex>counter</Flex> */}
          <div onClick={()=>removeProduct({id})}>
          <i className="fa fa-remove" style={{fontSize:"15px",color:"red",float:'right'}}> Remove from cart</i>
          </div>
        </Flex>
        
      </Box>
    </Box>
  );
}
