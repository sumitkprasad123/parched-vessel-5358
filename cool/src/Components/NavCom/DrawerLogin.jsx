

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
    ,MenuItem,Menu,
  } from '@chakra-ui/react'

  import { Link } from '@chakra-ui/react'
  import { ImTruck} from "react-icons/im";
  import { AiOutlineUndo,AiOutlineQuestionCircle,AiFillDollarCircle } from "react-icons/ai";
  import { FaUserCircle, } from "react-icons/fa";
  import { MdCardGiftcard,MdList,MdManageAccounts } from "react-icons/md";
  import { FiUserPlus } from "react-icons/fi";
  import { FcPortraitMode } from "react-icons/fc";
  import { SiEventbrite } from "react-icons/si";


export default function DrawerLogin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} onClick={onOpen}  variant='none'>
         <HStack  _hover={{color:"teal"}}><FaUserCircle size="1.7rem" /><Text>Sign in</Text></HStack> 
        </Button>
      
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton borderRadius="50%" border="2px solid" _hover={{bg:"rgba(198, 206, 206, 0.372)"}}/>
            <DrawerHeader>
              <HStack spacing="1.6rem">  
              <FaUserCircle size="3rem" />
                  <h1 style={{fontWeight:"550", fontSize:"1.7rem"}}>Account</h1>
              </HStack> 
             
            </DrawerHeader>
            
            <DrawerBody>
 
              <br/>
              <h6>Your Shop Consultant is SHOP Corporate Services</h6>
                <Menu>
                    <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><MdManageAccounts size="1.8rem"/><Link _hover={{color:"blue"}} href='#'>Sign In</Link></MenuItem>
                    <MenuItem _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><ImTruck size="1.8rem"/> <Link _hover={{color:"blue"}} href='#'>Track Orders</Link></MenuItem>
                    <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"> <AiOutlineUndo size="1.8rem"/> <Link _hover={{color:"blue"}} href='#'>Reorder Items</Link></MenuItem>
                    <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><AiFillDollarCircle size="1.8rem"/> <Link _hover={{color:"blue"}} href='#'>Cashback Program</Link></MenuItem>
                    <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><AiOutlineQuestionCircle size="1.8rem"/> <Link _hover={{color:"blue"}} href='#'>Help</Link></MenuItem>
                    <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><FiUserPlus size="1.8rem"/> <Link _hover={{color:"blue"}} href='#'>Create Account</Link></MenuItem>
                    <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><FaUserCircle size="1.8rem"/> <Link _hover={{color:"blue"}} href='#'>My Account</Link></MenuItem>
                </Menu>
                <br/>
                <hr/>
                <br/>

                <Menu>
                  <MenuItem _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><MdList size="1.8rem"/><Link _hover={{color:"blue"}} href='#'>List Manager</Link></MenuItem>
                  <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"> <MdCardGiftcard size="1.8rem"/><Link _hover={{color:"blue"}} href='#'>Gift Registry</Link></MenuItem>
                  <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><SiEventbrite size="1.8rem"/><Link _hover={{color:"blue"}} href='#'>eGifts</Link></MenuItem>
                  <MenuItem  _hover={{backgroundColor:"rgba(198, 206, 206, 0.372)"}} gap="1.1rem"><FcPortraitMode size="1.8rem"/><Link _hover={{color:"blue"}} href='#'>Wellness Manager</Link></MenuItem>

                </Menu>
                <br/>
                <hr/>
                <br/>
               
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }