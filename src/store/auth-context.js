import React,{useState} from "react";

 const AuthContext = React.createContext({
    token:"",
    isLoggedIn: false,
    login:()=>{},
    logout: ()=>{}
});


export const AuthContextProvider = (props) => {
    const [token,setToken] = useState(null)

    const userIsLoggedIn = !!token; // this convert true or false value into boolean value 
    //if token is string with not empty this will return true
    //iif token is string wiht empty this will return false

    const loginHandler = (token) => {
       setToken(token)
       console.log(token)
    }

    const logoutHandler = () => {
       setToken(null)
    }

    const contextValue = {
        token: token,
        isLoggedIn : userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>
    {props.children}
    </AuthContext.Provider>
}

export default AuthContext