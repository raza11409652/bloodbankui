import { useContext, useEffect, useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import authcontext from "../context/authcontext"

const Navbar =()=>{
  const {user , setUser} = useContext(authcontext)
  const [isLoggedIn , setLoggedIn] = useState(false)
  const history = useHistory()
  useEffect(()=>{
    // console.log(user);
    if(!user){
      setLoggedIn(false)
    }else{
      setLoggedIn(true)
    }
  },[user])
  const logout = ()=>{
    localStorage.setItem("_auth_token" , null)
    setUser(null)
    history.replace('/')

  }
    return(
        <nav className="navbar">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Blood Donor Live</span>
            <div className="">
               <ul className="navbar-nav ml-auto">
                 <li className="navbar-item">
                   <NavLink to="/" className="nav-link">Home</NavLink>
                 </li>
                 {isLoggedIn===null||isLoggedIn===false?<>
                  <li className="navbar-item">
                   <NavLink to="/register" className="nav-link">Register</NavLink>
                 </li>
                 <li className="navbar-item">
                   <NavLink to="/login" className="btn btn-danger text-white">Login</NavLink>
                 </li>
                 </>:<>
                 <li className="navbar-item">
                   <NavLink to="/dash"   className="nav-link">Dash</NavLink>
                 </li>
                 <li className="navbar-item">
                   <button onClick={logout}  className="btn btn-danger text-white">Logout</button>
                 </li>
                 </>}
               </ul>
            </div>
          </div>
        </nav>
    )
}
export default Navbar 