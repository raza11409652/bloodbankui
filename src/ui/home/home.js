import { NavLink } from "react-router-dom"
import Navbar from "../../component/navbar"
import Banner from './banner'

const Home = ()=>{

    return (
    <>
     <div className="home-wrapper">
         <Navbar/>
         <Banner/> 
         <div className="flaoting-btn">
             <NavLink to="/chat/bot">Chat now</NavLink>
         </div>
     </div>
    </>
    );
}
export default Home 