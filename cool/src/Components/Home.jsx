import { Box, Container,HStack,Stack,Link,Text, Grid ,Heading, VStack, Button} from '@chakra-ui/react'


export default function Home(){
   
    return(<>
            <Stack direction={'column'} bg="white">
            <Box m="1rem 0 1rem 0">
                <Container>
                    <HStack>
                        <span>
                           $50,009,502
                        </span>
                        <span>
                             awarded in
                        </span>
                        <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt="dollor" width="25rem" />
                        <span>
                            Cashback!
                        </span>
                        <Box  border="1px" borderRadius="2rem"  w="7rem" p={2} ><Link><Text fontWeight="550" fontSize="1.1rem">Learn More</Text></Link></Box>
                    </HStack>
                </Container>
            </Box>
            <Box>
                <img src="https://img.shop.com/Image/homepage/shop-gbr-102789-holiday-hot-toys-banners-1600x300-img-min1669996056936.jpg" alt="homePic" />
            </Box>
            <Box bg="#E2E8F0"  style={{margin:"auto",padding:"1.5rem",marginTop:"2rem"}}>
                <Grid gridTemplateColumns="repeat(4,1fr)" gap="1rem"  >
                    <Box boxShadow='dark-lg'  bg="white" p={2}>
                        <h1 style={{fontSize:"1.2rem",fontWeight:"550"}}>Recently Viewed</h1>
                        <img src="https://img.shop.com/Image/290000/291600/291696/products/1939500258.jpg?plain&size=3000x3000" alt="img2" />
                        <Link><Text >Browsing History</Text></Link>
                    </Box>
                    <Box boxShadow='dark-lg'  bg="white" p={2}>
                        <h1 style={{fontSize:"1.2rem",fontWeight:"550"}}>Your Favorite Departments</h1>
                        <img src="https://img.shop.com/Image/departments/Beauty.jpg" alt="img2" />
                        <Link><Text>Beauty</Text></Link>
                    </Box>
                    <Box boxShadow='dark-lg'  bg="white" p={2}>
                        <h1 style={{fontSize:"1.2rem",fontWeight:"550"}}>Featured OneCart Stores</h1>
                        <Grid gridTemplateRows="repeat(4,1fr)" gap="1rem" m="1rem 0 1rem 0">
                            <Box boxShadow='xs' bg="#E2E8F0"  p={3} pl="5rem"><img  src="https://img.shop.com/Image/topbrands/nmlogos_136706.gif" alt="img2" /></Box>
                            <Box boxShadow='xs' bg="#E2E8F0"  p={3} pl="5rem"><img src="https://img.shop.com/Image/topbrands/nmlogos_134047.gif" alt="img2" /></Box>
                            <Box boxShadow='xs' bg="#E2E8F0"  p={3} pl="5rem"><img src="https://img.shop.com/Image/topbrands/nmlogos_108567.gif" alt="img2" /></Box>
                            <Box boxShadow='xs' bg="#E2E8F0"  p={3} pl="5rem"><img src="https://img.shop.com/Image/topbrands/nmlogos_113138.gif" alt="img2" /></Box>
                        </Grid>
                        <Link><Text>See More Stores</Text></Link>
                    </Box>
                    <Box   p={2}>
                        <Box boxShadow='dark-lg'  bg="white" p={2} w="95%" m="auto">
                            <VStack>
                             <h1 style={{fontSize:"1.2rem",fontWeight:"550"}}>Sign in for the best experience</h1>
                             <Button w="80%" bg="#2A4365" color="white" borderRadius={"3xl"}>Sign In</Button>
                            </VStack>
                        </Box>
                        <Box m="auto" p="1rem">
                            <img src="https://img.shop.com/Image/homepage/stocking-stuffers-media-300x250-img1669837197571.jpg" alt="img2" />
                        </Box>
                    </Box>
                </Grid>
            </Box>

             <Grid gridTemplateColumns="repeat(3,1fr)" gap="4rem" m="2rem 0 1rem 0" p={3}>
                    <Box  p={3} pl="5rem"><img  src="https://img.shop.com/Image/homepage/giftsforher-media1664553609405.jpg" alt="img2" /></Box>
                    <Box  p={3} pl="5rem"><img src="https://img.shop.com/Image/homepage/giftsforhim-media1664553622036.jpg" alt="img2" /></Box>
                    <Box  p={3} pl="5rem"><img src="https://img.shop.com/Image/homepage/giftsforteens-media1664553627912.jpg" alt="img2" /></Box>            
              </Grid>
                <VStack><h1 style={{fontSize:"3rem", fontWeight:"bold", color:"blue"}}>Gift Ideas</h1></VStack>
              <Grid gridTemplateColumns="repeat(6,1fr)" gap="4rem" m="2rem 0 1rem 0" p={3}>
                   <VStack>
                       <Box border="4px" ><img  src="https://img.shop.com/Image/240000/243400/243406/products/1947692115.jpg?plain&size=400x400" alt="img2" /></Box>
                       <Heading as='h2' size='sm'>ELECTRONIC GIFTS</Heading>
                   </VStack>
                    <VStack>
                       <Box border="4px"><img src="https://img.shop.com/Image/240000/243300/243380/products/1869987733.jpg?plain&size=300x300" alt="img2" /></Box>
                       <Heading as='h2' size='sm'>GIFTS UNDER $25</Heading>
                    </VStack>
                    <VStack>
                       <Box border="4px" ><img src="https://img.shop.com/Image/260000/266700/266794/products/1920614672.jpg?plain&size=300x300" alt="img2" /></Box>            
                       <Heading as='h2' size='sm'>GIFTS UNDER $50</Heading>
                    </VStack>
                    <VStack>
                       <Box border="4px"><img  src="https://img.shop.com/Image/240000/243300/243380/products/1942133519.jpg?plain&size=1600x1600" alt="img2" /></Box>
                       <Heading as='h2' size='sm'>GIFTS UNDER $100</Heading>
                    </VStack>
                    <VStack>
                       <Box border="4px" ><img src="https://img.shop.com/Image/240000/248600/248698/products/1766653370.jpg?plain&size=300x300" alt="img2" /></Box>
                       <Heading as='h2' size='sm'>STOCKING STUFFERS</Heading>
                    </VStack>
                    <VStack>
                       <Box border="4px" ><img src="https://img.shop.com/Image/280000/287000/287062/products/1942108864.jpg?plain&size=300x300" alt="img2" /></Box>         
                       <Heading as='h2' size='sm'>GIFTS FOR THE FAMILY</Heading>
                    </VStack>
             </Grid>

             <Grid gridTemplateColumns="repeat(4,1fr)" gap="1rem" style={{margin:"3rem 3rem 3rem 3rem"}}  p={2}>
                    <Box  ><img  src="https://img.shop.com/Image/homepage/shop-usa-100086-gift-wrapping-media1669930199153.jpg" alt="img2" /></Box>
                    <Box  ><img src="https://img.shop.com/Image/homepage/shop-usa-105054-Holiday-egift-banners-social-media-assets-media1665596337501.jpg" alt="img2" /></Box>
                    <Box  ><img src="https://img.shop.com/Image/homepage/shop-usa-105045-Holiday-Curbside-Pickup-Banners-Social-Media-min1666128402917.jpg" alt="img2" /></Box>   
                    <Box  ><img src="https://img.shop.com/Image/homepage/shop_usa_100094_eng_2022_holiday_buy_online_pickup_in_store_banner_-min1667575563985.jpg" alt="img2" /></Box>                     
              </Grid>


            </Stack>
    </>
        
    )
}



// https://mock-server-app-kln2.onrender.com/users