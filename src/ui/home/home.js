import { NavLink } from "react-router-dom"
import Navbar from "../../component/navbar"
import Banner from './banner'

const Home = () => {

    return (
        <>
            <div className="home-wrapper">
                <Navbar />
                <Banner />
                {/* <div className="flaoting-btn">
             <NavLink to="/chat/bot">Chat now</NavLink>
         </div> */}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <NavLink to="/camp/sechdule" className="btn btn-info">Camp schedule</NavLink>
                        </div>
                        <div className="col-lg-4">
                        <NavLink to="/camp/search" className="btn btn-primary">Camp search</NavLink>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home