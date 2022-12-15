
import {createContext,useState} from "react"

export const AuthContext = createContext();


function AuthContextProvider({children}){
    const [count,setCount] = useState(7)

    return <AuthContext.Provider value={{count}}>
         {children}
    </AuthContext.Provider>
}

export default AuthContextProvider