import {Box} from '@chakra-ui/react'

import { Select } from '@chakra-ui/react'
const searchdata = ["All Departments","Auto" ,"Baby" ,"Beauty", "Books", "Business", "Cameras" ,"Clothes","Collectibles",
"Computers","Crafts","Electronics","Food and Drink","Garden","Gifts","Health & Nutrition","Home Store",
"Jewelry","Movies","Music","Party Supplies","Pet Supplies","Posters","Shoes","Software","Sports Fan Shop",
"Sports and Fitness","Tools","Toys","Travel","Video Games"]

export default function SearchMenu(){

return <Box >
          <Select placeholder='All Departments' variant="none" >
              {searchdata.map((el) =><option value={el}>{el}</option> )}
          </Select>
      </Box>
  }

