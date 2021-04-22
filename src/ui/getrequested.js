import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router";
import authcontext from "../context/authcontext";
import { getRequestedBlood, modifyRequest } from "../service/app.service";

const { default: Navbar } = require("../component/navbar")

const GetRequested = () => {
    const { user, setUser } = useContext(authcontext)
    // console.log(user);
    const [isLoaded, setLoaded] = useState(false)
    const [records, setRecords] = useState([])
    const token = localStorage.getItem('_auth_token');
    const router = useHistory()
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
    const modifyStatus = (status, id) => {

        const formdatad = {
            "status": status,
            "id": id
        }
        console.log(formdatad);
        modifyRequest({ formdata: formdatad, token: token }).then(data => {

            alert(JSON.stringify(data))
            router.push('/dash')
        }).catch(er => {
            // return
            console.log(er);
        })
    }
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

                                    {data.status === null || data.status === "null" ? <>
                                        <button className="btn btn-sm btn-danger" onClick={() => {
                                            modifyStatus("Yes"  , data._id)
                                        }}>YES</button>
                                        <button className="btn btn-sm btn-white" onClick={() => {
                                            modifyStatus("NO" , data._id)
                                        }}>No</button></> : <>  Accepted Status : {data.status}</>}
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