import { useState } from "react"
import { NavLink } from "react-router-dom";
import { searchUser } from "../../service/auth";
import { alertError, alertSuccess, alertWarning } from "../../utils/alert";
import { requestBloodInit } from '../../service/app.service'

const UserSearch = () => {
    const [query, setQuery] = useState();
    const [user, setUser] = useState(null)
    const [bloodGroup, setBloodGroup] = useState(null);
    const [unit, SetUnit] = useState('');
    const [reciever, setRecvr] = useState(null);
    const bloodgrouphandler = (e) => {
        setBloodGroup(e.target.value)
    }
    const token = localStorage.getItem('_auth_token');
    const formData = {
        bloodGroup: bloodGroup,
        reciever: reciever,
        unit: unit
    }
    const search = () => {
        if (formData.bloodGroup === null || formData.bloodGroup === "null") {
            alertError({ msg: "Select blood group" })
            return
        }
        searchUser({ token: token, query: formData.bloodGroup })
            .then(data => {
                console.log(data);
                if (data.error) {

                    alertError({ msg: data.msg })
                    return
                }
                console.log(data.records);
                setUser(data.records)
            }).catch(er => {
                console.log(er);
            })
    }
    const requestBlood = () => {
        // console.log(unit);
        console.log(formData);
        // if (formData.quantity == null || formData.quantity === undefined) {
        //     alertWarning({ msg: "Please eneter quntity in number" })
        //     return
        // }
        console.log(token);
        requestBloodInit({ data: formData, token: token }).then(data => {
            console.log(data);
            if(data.error==false){
                alertSuccess({msg:"Request has been saved"})
            }
        }).catch(er => {
            console.log(er);
        })


    }
    const inputHandler = (e) => {
        console.log(e.target.value);
        SetUnit(e.target.value);
    }

    return (<>
        <p className="mt-2">Search Blood donor now</p>
        <div className="row ">
            <div className="col-lg-6">
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
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={search}>Search</button>
                </div>
            </div>
            <div className="col-lg-6">
                {user === null ? <></> : user.length < 1 ? <>
                    <div className="alert alert-wanring">No user found for {formData.bloodGroup}</div>
                </> : user.map((data, index) => {
                    // console.log(data);
                    const userId = data._id
                    const url = "/chat/"
                    return (<div key={index}>
                        <div className="card">
                            <div className="card-header">
                                {data.name}
                                <span className="chip float-right ">{data.isDonor === true ? "DONOR" : "NOT DONOR"}</span>
                            </div>
                            <div className="card-body">
                                <p className="text-primary">Email : {data.email}</p>
                                <p>Blood Group {data.bloodGroup}</p>

                                {/*  */}

                                {data.isDonor === false ? <></> : <>
                                    <input className="form-control" onChange={inputHandler} placeholder="Enter unit required"></input>
                                    <button className="btn btn-info mt-2" onClick={() => {
                                        setBloodGroup(data.bloodGroup)
                                        setRecvr(data._id)
                                        requestBlood()
                                    }}>Request Blood</button>
                                </>}
                                {/* <NavLink className="btn btn-primary ml-2" to={url}>Chat now</NavLink> */}
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </>)
}
export default UserSearch