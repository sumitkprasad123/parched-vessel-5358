import { Input, InputGroup,InputLeftAddon,InputRightElement } from "@chakra-ui/react";
import { FaUndo } from "react-icons/fa";
import { MdShoppingCart,MdOutlineSearch } from "react-icons/md";
// import {AuthContext} from "../Context/AuthContext"
import Drawer1 from "./NavCom/Drawer1"
import DrawerLogin from "./NavCom/DrawerLogin"
import logo from "../images/logo.png"
import SearchMenu from "./NavCom/SearchMenu"
import { 
      Stack,
      HStack,
      VStack,
      Box,
      Center,
      Link,Flex,Text
     } from '@chakra-ui/react'

const NavMenu = ["Exclusive Brands","Stores","Deals","SHOP Travel","Departments","ShopBuddy","SHOP Local"]

function Navbar (){

    return(
         <>
          <VStack spacing={0} align='stretch' p={1}>
                <Box h='40px' bg='#202340'>
                    <Center h='40px' gap={4} color="white">
                        Buy now, pay later! Use Sezzle this Holiday Season! <Link href='#'>Learn More</Link>
                    </Center>
                </Box>
                <Box>
                    <Flex>
                        <Box w='15%' h={115} p={1.5}  >
                            <Stack >
                                <Box paddingLeft="1rem"><img style={{height:"4rem",width:"100%"}} src= {logo} alt="logo" /></Box>
                                
                                <Box width="70%"><Drawer1/></Box>
                            </Stack>
                        </Box>
                        <Box w='85%' h={115}  paddingLeft={45} >
                            <Flex m="0.7rem" justifyContent="space-between">
                                <Box border="1px" borderRadius={50} w="53%" h="auto">
                                    <InputGroup variant="none" size="lg" >
                                        <InputLeftAddon bg="white" borderLeftRadius={50} >
                                            <SearchMenu/>
                                        </InputLeftAddon>
                                        <Input borderRightRadius={50} placeholder='Search BUY.COM...' />
                                        <InputRightElement
                                              borderRightRadius={50}
                                              bg="black" width='2.5rem'
                                              >
                                                <button><MdOutlineSearch size="1.6rem" color="white"/></button>
                                        </InputRightElement>
                                    </InputGroup>
                                </Box>
                                <Box>
                                    <img src="https://img.shop.com/Image/header2013/layered-us-eng-105972-blk-friday-banner-300x50-11670940062489.jpg" alt="img"/>
                                </Box>

                            </Flex>
                            <Flex m="0.7rem" justifyContent="space-between">
                                <Box>
                                   <HStack spacing='15px'>
                                      {NavMenu.map((el)=>
                                         <Link _hover={{color:"blue"}} href='#'>
                                            <Text fontSize={15}>{el}</Text>
                                         </Link>)}
                                    </HStack> 
                                </Box>
                                <Box>
                                    <HStack spacing='3rem'>
                                        <Box><DrawerLogin/></Box>
                                        <button><HStack  _hover={{color:"teal"}}><FaUndo size="1.4em"/><Text>Orders</Text></HStack></button>
                                        <button ><HStack _hover={{color:"teal"}}><MdShoppingCart size="1.8em"/><Text>Cart</Text></HStack></button>

                                    </HStack>
                                </Box>
                            </Flex>

                        </Box>
                    </Flex>
                </Box> 
          </VStack>
          
         </>
    )
}

export default Navbar
