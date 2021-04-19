import { useContext, useEffect, useState } from "react"
import authcontext from "../context/authcontext";
import { getRequestedBlood } from "../service/app.service";

const { default: Navbar } = require("../component/navbar")

const GetRequested = () => {
    const {user , setUser} =useContext(authcontext)
    // console.log(user);
    const [isLoaded, setLoaded] = useState(false)
    const [records, setRecords] = useState([])
    const token = localStorage.getItem('_auth_token');
    useEffect(() => {
        getRequestedBlood({ token: token }).then(data => {
            // console.log(data);
            setLoaded(true)
            const error = data.error
            if (!error) {
                const records = data.record
                setRecords(records)
            }
        }).catch(er => {
            console.log(er);
        })
    }, [token])
    return (<>
        <Navbar></Navbar>

        <div className="container pt-5">
            <h5>Blood Request</h5>
            <pre>
                {user?.name}<br></br>
                {user?.email}
            </pre>
            {isLoaded === false ? <>
                <p>Fetching data from server . . </p>
            </> : <>
                {
                    records.length < 1 ? <>
                        No Record found
                    </> : <>
                        {records.map((data, index) => {
                            console.log(data);
                            return (
                            <p key={index} className="alert alert-info">
                                {data.name} Asking for {data?.qty} unit of blood <br></br>
                                Blood group {data?.group}

                                <button className="btn btn-sm btn-yellow">YES</button>
                            </p>
                           );
                        })}
                    </>
                }
            </>}
        </div>
    </>)
}

export default GetRequested