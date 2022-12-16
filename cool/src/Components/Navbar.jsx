
// import {useContext} from "react"
// import {AuthContext} from "../Context/AuthContext"
import Drawer1 from "./NavCom/Drawer1"
import logo from "../images/logo.png"
import { 
      Stack,
      HStack,
      VStack,
      Box,
      Center,
      Link,Flex,
     } from '@chakra-ui/react'

function Navbar (){

    return(
         <>
          <VStack spacing={0} align='stretch'>
                <Box h='40px' bg='#202340'>
                    <Center h='40px' gap={4} color="white">
                        Buy now, pay later! Use Sezzle this Holiday Season! <Link href='#'>Learn More</Link>
                    </Center>
                </Box>
                <Box>
                    <Flex>
                        <Box w='15%' h={120} border="1px">
                            <Stack >
                                <Box ><img style={{height:"4.2rem",width:"100%"}} src= {logo} /></Box>
                                
                                <Box ><Drawer1/>Categories</Box>
                            </Stack>
                        </Box>
                        <Box w='85%' h={120} ></Box>
                    </Flex>
                </Box> 
          </VStack>
          
         </>
    )
}

export default Navbar

