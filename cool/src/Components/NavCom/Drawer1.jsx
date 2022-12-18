import {GiHamburgerMenu} from "react-icons/gi";

import React from "react"
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Text,HStack
    ,Image,MenuItem,Menu
  } from '@chakra-ui/react'

  import { GoChevronRight } from "react-icons/go";
  import { ImTruck} from "react-icons/im";
  import { AiOutlineUndo,AiOutlineQuestionCircle } from "react-icons/ai";

const sideBarData1 = [
  "Gift Center",
"SHOP.COM Home Warranties",
"Onecart Exclusive Deals",
"Clothes",
"Shoes",
"Beauty",
"Home",
"Electronics",
"Health & Nutrition",
"Jewelry",
"Kids",
"Pet Supplies",
"Food & Drink",
"Travel",
"SHOP Travel",
"All Stores",

]

const sideBarData2 = [
"List Manager",
"Gift Registry",
"eGifts",
"Price Alerts",
"Shop Services",
"Shop Local",
"Shopbuddy",
"Trends",
"Deals",
"Carsaver",
"Best of Web",
"Nutri-Physical"
]
export default function Drawer1() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} onClick={onOpen}  variant='none'>
         <HStack  _hover={{color:"blue"}}><GiHamburgerMenu size="1.5rem" /><Text>Categories</Text></HStack> 
        </Button>
      
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton borderRadius="50%" border="2px solid" _hover={{bg:"rgba(198, 206, 206, 0.372)"}}/>
            <DrawerHeader>
              <HStack>  
                  <Image
                    boxSize='2.5rem'
                    borderRadius='full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoWYBHgLKH30so0wCmuIwMCxlTZdGGfXUvnQ&usqp=CAU'
                    alt='Fluffybuns the destroyer'
                    mr='12px'
                  />
                  <h1>BUY.COM</h1>
              </HStack> 
             
            </DrawerHeader>
            <br/>
            <DrawerBody>
               
              <h1 style={{fontWeight:"550", fontSize:"1.4rem"}}>Categories</h1>
              <br/>
                <Menu>
                  {sideBarData1.map((el) =>
                   <HStack ><MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} justifyContent="space-between">{el}<GoChevronRight/></MenuItem></HStack>
                  )}
                </Menu>
                <br/>
                <hr/>
                <br/>
                <h1 style={{fontWeight:"550", fontSize:"1.4rem"}}>Account</h1>
                <br/>
                <Menu>
                  <MenuItem _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><ImTruck size="1.8rem"/>Track Orders</MenuItem>
                  <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"> <AiOutlineUndo size="1.8rem"/>Reorder Items - updated</MenuItem>
                  <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><AiOutlineQuestionCircle size="1.8rem"/>Help</MenuItem>
                </Menu>
                <br/>
                <hr/>
                <br/>
                <h1 style={{fontWeight:"550", fontSize:"1.4rem"}}>Features</h1>
                <br/>
                <Menu>
                  {sideBarData2.map((el) =>
                   <HStack _hover={{color:"blue",}}><MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} >{el}</MenuItem></HStack>
                  )}
                </Menu>
                <br/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }