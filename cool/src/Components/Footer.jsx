
import { Input,InputRightAddon,InputGroup,Select} from '@chakra-ui/react'
import { Box,Flex,HStack,Text,Link} from '@chakra-ui/react'
import {FaFacebookF,FaPinterestP,FaTwitter,FaEnvelope } from "react-icons/fa";

const footerData = [
  "Privacy Policy |", "Terms of Use |", "Advertising Disclosure |", "Return Policy |", "Shipping Information"
]
const footerImage = [
  "https://img.shop.com/Image/images/ir/Shop-ranks-19-in-newsweek-circle.png",
   "https://img.shop.com/Image/images/ir/DC360_2022_rank_10_top_500_primary_merch_category.png",
   "https://img.shop.com/Image/images/ir/DC360_2022_rank_55_top_100.png",
   "https://img.shop.com/Image/images/ir/DC360_2022_rank_80_top_500_and_1000.png",
   "https://img.shop.com/Image/images/ir/Shop-ranks-13-in-NC-circle.png",
   "https://img.shop.com/Image/images/ir/commonwealth_2022_rank_22_top_2000_tw_english.png",
   "https://img.shop.com/Image/resources/images/torch-tafe2018-badge.png",
   "https://seal-greensboro.bbb.org/seals/blue-seal-153-100-marketamericashopcom-4002355.png"
]

export default function Footer(){

    return(
      <Box bg="#545871">
         <Box >

          <Flex justifyContent="space-between" p={2}>
              <Box w="40%"  m={3} >
                <HStack spacing="2rem">
                    <Box><Text color="white">Get Email Deals & Earn Cashback</Text></Box>
                    <Box>
                         <InputGroup size="sm">
                            <Input width='16rem'  bg="white" placeholder='enter email address..' />
                            <InputRightAddon  children='Sign Up' />
                          </InputGroup>
                    </Box>
                </HStack>
              </Box>
              <Box m={3}>
                 <Text color="white">Link To This Page & Tell All Your Friends!</Text>
              </Box>
          </Flex>
        
         </Box>
         <hr/>
         <Box >
            <Flex justifyContent="space-between" p={3} color="white" fontSize="0.8rem" fontWeight="550">
                <HStack spacing="0.8rem">
                    <Link href="#">About Us</Link>
                    <Link href="#">Help</Link>
                    <Link href="#">Accessibility Statement</Link>
                    <Link href="#">Contact Us</Link>
                    <Link href="#">Partner With Us</Link>
                    <Link href="#">Services</Link>
                    <Select m={2} placeholder='Country/Region' fontSize="0.9rem"
                     width="9rem" _hover={{color:"black"}} variant="unstyled">
                      <option value='Malaysia' >Malaysia</option>
                      <option value='Singapore'>Singapore</option>
                      <option value='Hong Kong'>Hong Kong</option>
                      <option value='Taiwan'>Taiwan</option>
                      <option value='Australia'>Australia</option>
                      <option value='United Kingdom'>United Kingdom</option>
                      <option value='Canada'>Canada</option>
                      <option value='United States'>United States</option>

                    </Select>
                    <Link href="#">About Us</Link>
                    <Link href="#">Own Your Own SHOP Site</Link>
                </HStack>
                <Box paddingRight="1.5rem">
                   <HStack spacing="1rem">
                      <Link href="#"><FaEnvelope size="1.8em"/></Link>
                      <Link href="#"><FaFacebookF size="1.8em"/></Link>
                      <Link href="#"><FaTwitter size="1.8em"/></Link>
                      <Link href="#"><FaPinterestP size="1.8em"/></Link>
                    </HStack>
                </Box>
            </Flex>
         </Box>
         <Box bg="rgba(241, 241, 241, 0.868)" p={4}>
             <p style={{fontSize:"0.8rem", color:"black"}}>© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners.</p>
             <p style={{fontSize:"0.8rem", color:"black"}}>Only Customers will receive cashback on qualifying purchases. UnFranchise Owners/Shop Consultants will receive increased IBV instead of cashback on qualifying purchases. </p>
             <HStack marginTop="1rem"> {footerData.map((el) => <Link><Text style={{fontSize:"0.9rem", color:"black"}}>{el}</Text></Link>)}</HStack>
             <hr />
            
             <HStack spacing="1rem" marginTop="2rem" paddingLeft="18rem">{footerImage.map((el) => <img src={el} alt="ok" width="8%" />)}</HStack>
             <HStack marginTop="1.5rem" paddingLeft="40rem"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpwB90ZfSa5N2c6kCIMTt_i6mJVrBIlCVCw&usqp=CAU" alt="logo1" width="16%" /></HStack>
         </Box>

      </Box>
       
    )
}

