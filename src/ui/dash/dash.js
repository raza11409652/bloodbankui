import { NavLink } from "react-router-dom"
import Profile from "../profile"

const { default: Navbar } = require("../../component/navbar")
const { default: UserSearch } = require("../../component/user/search")

const Dash = ()=>{
   return (<>
    <Navbar></Navbar>
   
    <div className="container">
    <Profile></Profile>
        <div className="flaoting-btn">
          <NavLink to="/chat" className="btn btn-success">Broadcast Chat</NavLink>
        </div>
       <UserSearch/>
    </div>
    </>)
}
export default Dash