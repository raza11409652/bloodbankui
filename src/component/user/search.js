import { useState } from "react"
import { NavLink } from "react-router-dom";
import { searchUser } from "../../service/auth";
import { alertError } from "../../utils/alert";

const UserSearch = ()=>{
    const [query ,setQuery] = useState();
    const [user , setUser] = useState(null)
    const [bloodGroup ,setBloodGroup] = useState();
    const bloodgrouphandler =(e)=>{
        setBloodGroup(e.target.value)
    }
    const token = localStorage.getItem('_auth_token');
    const formData = {
        bloodGroup:bloodGroup
    }
    const search = ()=>{
        if(formData.bloodGroup===null||formData.bloodGroup==="null"){
            alertError({msg:"Select blood group"})
            return
        }
        searchUser({token:token , query:formData.bloodGroup})
        .then(data=>{
            console.log(data);
            if(data.error){

                alertError({msg:data.msg}) 
                return
            }
            console.log(data.records);
            setUser(data.records)
        }).catch(er=>{
            console.log(er);
        })
    }

    return(<>
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
            {user===null?<></>:user.length<1?<>
            <div className="alert alert-wanring">No user found for {formData.bloodGroup}</div>
            </>:user.map((data,index)=>{
                // console.log(data);
                const userId = data._id 
                const url ="/chat/"
                return(<div key={index}>
                    <div className="card">
                        <div className="card-header">
                            {data.name}
                            <span className="chip float-right ">{data.isDonor===true?"DONOR":"NOT DONOR"}</span>
                        </div>
                        <div className="card-body">
                            <p className="text-primary">Email : {data.email}</p>
                            <p>Blood Group {data.bloodGroup}</p>
                            <button className="btn btn-info">Request Blood</button>
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