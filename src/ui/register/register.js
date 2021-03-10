import { useState } from 'react'
import ReactLoader from 'react-loader'
import BannerImage from '../../assets/image/home.png'
import Navbar from '../../component/navbar'
import { isEmpty } from "../../utils/string.handler";
import { alertError , alertSuccess, alertWarning } from "../../utils/alert";
import {registerService} from '../../service/auth'
const Register = ()=>{
    const [email , setEmail] = useState(null)
    const [name , setName] = useState(null)
    const [password ,setPassword] = useState(null)
    const [isLoading  ,setLoading] = useState(false)
    const [bloodGroup  ,setBloodGroup] = useState(null)
    const [isDonor  ,setIsDonor] = useState(false)
    const formData ={
        name:name , 
        email:email , 
        password:password,
        bloodGroup:bloodGroup,
        isDonor:isDonor
    }
    const bloodgrouphandler = (e)=>{
        // console.log(e.target.value);
        setBloodGroup(e.target.value)
    }

    const emailHandler = (e)=>{
        setEmail(e.target.value)

    }
    const nameHandler = (e)=>{
      setName(e.target.value)
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value)

    }
    const isDonorHanlder = (e)=>{
        // console.log(e.target.checked);
        setIsDonor(e.target.checked)
    }
    const register = ()=>{
        // setLoading(true)
        if(isEmpty({string:formData.name})){
            alertWarning({msg:"Name is required"})
            return
        }
        if(isEmpty({string:formData.email})){
            // console.error("Email is invalid");
            alertWarning({msg:"Email is required"})
            return
        }
        if(isEmpty({string:formData.password})){
            // console.error("Password is invalid");
            alertWarning({msg:"Password is required"})

            return
        } 
        if(formData.bloodGroup===null||formData.bloodGroup==="null"){
            alertWarning({msg:"Blood group is required"})

            return
        }
        setLoading(true)
       registerService({formData:formData}).then(data=>{
        setLoading(false)
          if(data.error){
              alertError({msg:data.msg})
              return
          }
          alertSuccess({msg:data.msg+", Now you can login into your account"})
       }).catch(er=>{
           console.log(er);
       })
    }

    return (
        <>
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
                                 Register new account its free
                             </h5>
                         </div>
                         <div className="form-group">
                             <label>Enter your name</label>
                             <input className="form-control" onChange={nameHandler} type="text" placeholder="Your Name"/>
                             
                         </div>
                         <div className="form-group">
                             <label>Enter your email</label>
                             <input className="form-control" onChange={emailHandler} type="email" placeholder="email@text.in"/>
                             
                         </div>
                         <div className="form-group">
                             <label>Enter your password</label>
                             <input className="form-control" onChange={passwordHandler} type="password" placeholder="your secret password"/>
                             
                         </div>
                         <div className="form-group">
                             <label>Select Blood group</label>
                             <select className="form-control" onChange={bloodgrouphandler}> 
                                 <option value="null">Select blood group</option>
                                 <option value="OPOSITIVE">O Positive</option>
                                 <option value="ONEGATIVE">O Negative</option>
                                 <option value="APOSITIVE">A RhD positive (A+)e</option>
                                 <option value="ANEGATIVE">A RhD negative (A-)</option>
                                 <option value="BPOSITIVE">B RhD positive (B+)</option>
                                 <option value="BNEGATIVE">B RhD Negative (B-)</option>
                                 <option value="ABPOSITIVE"> AB RhD positive (AB+)</option>
                                 <option value="ABNegative"> AB RhD Negative (AB-)</option>
                                 {/* */}
                             </select>
                         </div>
                         <div className="form-group">
                             <label>Are you willing to donate if required? : </label>
                             <input type="checkbox" onChange={isDonorHanlder} />
                         </div>
                         <div className="form-group">
                             <ReactLoader loaded={!isLoading}></ReactLoader>
                            <button className="btn btn-danger" onClick={register}>
                                 Register
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </>
    )
}
export default Register