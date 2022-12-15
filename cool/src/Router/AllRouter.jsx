
import {Routes,Route} from "react-router-dom";
import Home from "../Components/Home"
import Login from "../Pages/Login"

function AllRouter(){

    return(
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login />}></Route>
       </Routes>
    )
}

export default AllRouter