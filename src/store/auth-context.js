import React,{useState, useEffect} from "react";

 const AuthContext = React.createContext({
    token:"",
    isLoggedIn: false,
    login:()=>{},
    logout: ()=>{}
});


export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token,setToken] = useState(initialToken)

    const userIsLoggedIn = !!token; // this convert true or false value into boolean value 
    //if token is string with not empty this will return true
    //iif token is string wiht empty this will return false

    const loginHandler = (token) => {
       setToken(token)
       localStorage.setItem('token', token);
    //    console.log(token)
    }

    const logoutHandler = () => {
       setToken(null)
       localStorage.removeItem('token')
    }
    
    //when ever user run this compo useEffect will run along wiht it
    // when user logged in the token will be set to lcoalstroage
    useEffect(() => {
        const tokenExpirationTimer = setTimeout(() => {
          logoutHandler();
        }, 5 * 60 * 1000); // 5 minutes in milliseconds
    
        return () => {
          clearTimeout(tokenExpirationTimer);
        };
      }, [token]);

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