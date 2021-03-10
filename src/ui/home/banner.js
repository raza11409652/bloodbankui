import { useEffect, useState } from 'react'
import BannerImage from '../../assets/image/home.png'
import './banner.css'
import {getCityList , getStateList} from '../../utils/state'
import { useHistory } from 'react-router-dom'
const Banner = ()=>{

    const history = useHistory()
    const [state , setState] = useState([])
    const [city , setCity] = useState([])
    const [selectedState ,setSelectedState]  = useState(null)
    const [selectedCity ,setSelectedCity]  = useState(null)
   

    useEffect(()=>{
       const state =  getStateList()
       setState(state)
    },[])
    const onStateHandler = (e)=>{
    

        const position  =e.target.value
        if(position===null||position==="null"){
            setCity([])
            return;}
        console.log(state[position-1]);
        setSelectedState(state[position-1])

        var cities= getCityList(e.target.value)
        setCity(cities)
        // console.log(city);
    }
    const cityHandler = (e)=>{
        const value  =e.target.value
        setSelectedCity(value)
    }
    const searchStart = ()=>{
        if(selectedState===null||selectedCity===null){
            alert("SELECT STATE AND CITY")
            return
        }
        const query = "/"+selectedState+ "/"+selectedCity
        // console.log(query);
        const url ="/bloodbank"+query
        history.push(url)
    }
    
    return(
    <>
     <div className="container">
         <div className="display-flex">
             <div className="left">
               <img src={BannerImage} draggable={false} className="banner-image"></img>
             </div>
             <div className="right">
                 <div className="bank-finder">
                     <div className="form-group">
                         <h5>
                             Find the nearest Blood bank near you
                         </h5>
                     </div>
                         <p>
                             Search Using Pincode or your Address
                         </p>
                     <div className="form-group">
                         <label>
                             Select State
                         </label>
                         
                         <select className="form-control" onChange={onStateHandler}>
                             <option value="null">Select State</option>
                             {state===null?<></>:state.map((data , index)=>{
                                //  console.log(data);
                                //  console.log(index);
                                return (<>
                                <option key={index} value={index+1}>{data}</option>
                                </>)
                             })}
                         </select>
                         
                     </div>

                     <div className="form-group">
                     <select className="form-control" onChange={cityHandler}>
                             <option value="null">Select City</option>
                             {city===null||city.length<1?<></>:city.map((data , index)=>{
                                 return (<>
                                    <option key={index} value={data}>{data}</option>
                                    </>)
                             })}
                         </select>
                     </div>
                     <div className="form-group">
                        <button className="btn btn-danger" onClick={searchStart}>
                             Search Blood bank
                         </button>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    </>)
}
export default Banner