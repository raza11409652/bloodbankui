import Navbar from "../../component/navbar"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { newcamp } from "../../service/camp.service";
import { alertSuccess } from "../../utils/alert";
const CampSchedule = () => {
    const token = localStorage.getItem('_auth_token');
    const [startDate, setStartDate] = useState(new Date());
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [start, setStart] = useState(null)
    const [end, setEnd] = useState(null)
    const formdata = {
        title: title,
        desc: desc,
        start: start,
        end: end,
        date:startDate
    }
    const titleHandler = (e) => {

        setTitle(e.target.value)
    }
    const descHandler = (e) => {

        setDesc(e.target.value)
    }
    const submitHanlder = () => {
        // console.log(token);
        if (formdata.title == null || formdata.desc == null || formdata.start == null || formdata.end == null) {
            alert("Required param missing")
            return
        }
        newcamp({ formdata: formdata, token: token }).then(data => {
            console.log(data);
        }).catch(er => {
            console.log(er);
        })
        alertSuccess({msg:"Camp has been schdeuled"})


    }
    return (<>
        <Navbar></Navbar>
        <div className="container">
            <div className="jumbotron">
                <h4 className="display-4">Schedule camp</h4>
                <p className="lead">Schedule camp for blood donation event </p>
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Title for camp" onChange={titleHandler}></input>
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="description" onChange={descHandler}></input>
            </div>
            <div className="form-group">
                <label>Select date for camp</label>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
            <div className="form-group">
                <label>Select start timing</label>
                <select className="form-control" onChange={e => setStart(e.target.value)}>
                    <option value="10AM">10AM</option>
                    <option value="11AM">11AM</option>
                    <option value="12PM">12PM</option>
                    <option value="01PM">01PM</option>
                    <option value="02PM">02PM</option>
                    <option value="03PM">03PM</option>
                </select>
            </div>
            <div className="form-group">
                <label>Select end timing</label>
                <select className="form-control" onChange={e => setEnd(e.target.value)}>
                    <option >Select date</option>
                    <option value="12PM">12PM</option>
                    <option value="01PM">01PM</option>
                    <option value="03">03PM</option>
                    <option value="04PM">04PM</option>
                    <option value="05PM">05PM</option>
                    <option value="06PM">06PM</option>
                </select>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={submitHanlder}>Create</button>
            </div>
        </div>
    </>)
}

export default CampSchedule