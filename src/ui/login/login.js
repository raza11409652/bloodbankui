import BannerImage from '../../assets/image/home.png'
import Navbar from '../../component/navbar'
import  "./login.css";
import { loginService } from "../../service/auth";
import { useContext, useState } from 'react';
import { alertError, alertSuccess } from '../../utils/alert';
import ReactLoader from 'react-loader';
import authcontext from '../../context/authcontext';
import { useHistory, useLocation } from 'react-router-dom';
const Login = ()=>{
    const location = useLocation()
    const nextPath = location.pathname
    // console.log(nextPath);

    const [email , setEmail]  = useState(null)
    const [password , setPassword] = useState(null)
    const [isLoading  ,setLoading] = useState(false)
    const {user , setUser} = useContext(authcontext)
    const history = useHistory();
    const formdata ={
        email:email , 
        password:password
    }
    const emailHandler = (e)=>{
        setEmail(e.target.value)
    }
    const passwordHandler =(e)=>{
        setPassword(e.target.value)
    }
  
    const loginInit = ()=>{
        setLoading(true)
        loginService({formData:formdata}).then(data=>{
            setLoading(false)
            if(data.error){
                // alertError({msg:data.msg})
                alertError({msg:data.msg})
                return
            }
            alertSuccess({msg:"login success"})
            const loginToken = data.loginToken
            localStorage.setItem("_auth_token", loginToken)
            localStorage.setItem("userID" , data.user._id)
            setUser(data.user);
            if(nextPath!=="/login"){
                history.replace(nextPath)
            }else{
                history.replace('/dash')
            }
            

        }).catch(er=>{
           console.log(er);
        })
    }
    return(
        <>
        <div>
            <Navbar></Navbar>
            <div className="container">
             <div className="display-flex">
                 <div className="left">
                   <img src={BannerImage} draggable={false} className="banner-image"></img>
                 </div>
                 <div className="right">
                     <div className="login-form">
                         <div className="form-group">
                             <h5>
                                 Login to your account
                             </h5>
                         </div>
                         <div className="form-group">
                             <label>Enter your email</label>
                             <input onChange={emailHandler} className="form-control" type="email" placeholder="email@text.in"/>
                             
                         </div>
                         <div className="form-group">
                             <label>Enter your password</label>
                             <input onChange={passwordHandler} className="form-control" type="password" placeholder="your secret password"/>
                             
                         </div>
                         <ReactLoader loaded={!isLoading}></ReactLoader>
                         <div className="form-group">
                            <button className="btn btn-danger" onClick={loginInit}>
                                 Login
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </div>
        </>)
}
export default Login