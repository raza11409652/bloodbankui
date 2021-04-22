import { useEffect, useState } from "react"
import Navbar from "../../component/navbar"
import { getCamps } from "../../service/camp.service"

const CampSearch = ()=>{
    const [records ,setRecords] = useState([]) 
    useEffect(()=>{
        getCamps().then(data=>{
            // console.log(data);
            const error = data?.error 
            if(error) {
                alert("Error from server")  
                return ;
            }
            const records =data.data 
            setRecords(records)


        }).catch(er=>{
            console.log(er);
        })
    },[])
    return (
        <>
        <Navbar></Navbar>
        <div className="container pt-4">
            {records.length<1?<>
            Please wait ...
            </>:<>
            {records.map(data=>{
                return (<>
                
                <div className="alert alert-warning">
                    <h4>{data.title}</h4>
                    <p>{data.desc}</p>
                    <span className="btn btn-primary float-right">{data.date}</span>
                    <div className="row">
                        <div className="col-lg-6">
                            Start date {data.start}
                        </div>
                        <div className="col-lg-6">
                           End date {data.end}
                        </div>
                    </div>
                </div>
                </>)
            })}
            </>}
        </div>
        </>
    )
}
export default CampSearch