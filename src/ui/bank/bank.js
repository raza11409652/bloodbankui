import { useEffect, useState } from "react"
import ReactLoader from "react-loader"
import { NavLink, useParams } from "react-router-dom"
import Navbar from "../../component/navbar"
import SingleBank from "../../component/single.bank"
import { searchBank } from "../../service/app.service"
import Banner from "../home/banner"

const BloodBank = ()=>{
    const param = useParams()
    const [isloaded , setLoaded] = useState(false)
    const [banks , setBanks]  =useState(null)
    // console.log(param);
    var city = param.city
    city = city.trim()
    var state = param.state
    state  = state.trim()
    useEffect(()=>{
        searchBank({query:city}).then(data=>{
            // console.log(data);
            setLoaded(true)
            if(data.error){
            }else{
                setBanks(data.records)
            }
        }).catch(er=>{
            setLoaded(true)
            console.log(er);
        })
    },[city , state])
    return(
        <>
        <Navbar>
           
        </Navbar>
        <div className="container">
           {/* <Banner></Banner> */}
           <ReactLoader loaded={isloaded}></ReactLoader>
                <div className="alert alert-info mt-2">
                    <p>
                        List of blood bank in {state} - {city}
                    </p>
                </div>
                <div className="row">
                    {banks===null?<>Fetching data</>:banks.length<1?<>
                    <div className="alert alert-danger">No blood bank found</div>
                    </>:banks.map((data,index)=>{
                        // console.log(index);
                        return (
                        <div  className="col-lg-6 col-sm-6 col-ms-6 mb-2" key={index}>
                            <SingleBank data={data}></SingleBank>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default BloodBank