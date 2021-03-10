import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../../component/navbar"
import {db} from '../../config/firebase.config'
import authcontext from "../../context/authcontext"
import { singleUserData } from "../../service/auth"

const Chat = ()=>{

    const {user , setUser} = useContext(authcontext)
    // console.log(user);
    const [reciever , setReciever] = useState(null)
    const [msg , setMsg] = useState('')
    const [chats , setChats] = useState(null)
    // console.log(db);
    // const param = useParams()
    // const uid = param.user
    const senderUid =  localStorage.getItem("userID")
    console.log(senderUid);
    useEffect(()=>{

        getChats()
    },[user])
    const getChats = ()=>{
        try {
            db.ref("chats").on("value" , element=>{
                // console.log(element);
                var arary = []  ; 
                element.forEach(data=>{
                    arary.push(data.val())
                })
                setChats(arary)
            });
        }catch(er){
            console.log(er);
        }
    }
    const sentChat = async ()=>{

        try {
            await db.ref("chats").push({
              content: msg,
              user:user.name,
              timestamp: Date.now(),
              sender: user._id||null, 

            });
            setMsg("")
            // this.setState({ content: '' });
          } catch (error) {
              console.log(error);
            // this.setState({ writeError: error.message });
          }
        
    }
    const  inputhandler = (e)=>{
        setMsg(e.target.value)

    }
  return(<>
    <Navbar></Navbar>
    <div className="container">
        <p className="mt-2">Chat with {reciever===null?"":reciever.name}</p>
        <div className="chat-box">
            {chats===null?<></>:chats.map((data ,index)=>{
                console.log(data);
                return(<>
                <p className="chat-item" key={index}>{data.content} <span className="float-right text-small">{data.user}</span></p>
                </>)
            })}
        </div>
        <div className="row">
            <div className="col-lg-9">
               <input className="form-control" placeholder="start writing" value={msg} onChange={inputhandler}></input>
            </div>
            <div className="col-lg-3">
                <button className="btn btn-success btn-block" onClick={sentChat}>Send</button>
            </div>
        </div>
    </div>
    </>)
}
export default Chat 