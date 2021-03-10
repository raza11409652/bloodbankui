import { useContext, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { accesstokenLogin } from "../service/auth"
import authcontext from "../context/authcontext";
import Login from "../ui/login/login";
const ProtectedRoute = ({
    component: Component,
    ...rest
  })=>{
    const {user , setUser}  = useContext(authcontext)
    const token = localStorage.getItem('_auth_token');
    const [error , setError]=useState(null)
    useEffect(()=>{
      // console.log(token);

      accesstokenLogin({token:token}).then(data=>{
        if(!data){
            setError(true)
        }
        if(data.error){
            setError(true)
        }else{
            setError(false)
            setUser(data.user)
        }
        
      }).catch(er=>{
          console.log(er);
      })
    },[token])
    
    // const [error , setError]=useState(false)
    return (
        <Route
          {...rest}
          render={props => {
             if(error===null){
                 //do nothing. ...
             }
             else if(error===true){
              return  <Login></Login>
             }else if(error===false){
                 return  <Component {...props}></Component>
             }
              
          }}
        />
      );
}
export default ProtectedRoute