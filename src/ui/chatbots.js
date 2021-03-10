import Chatbot from "react-chatbot-kit";
import config from '../config/chatbot.config'
import MessageParser from '../config/massageparser'
import ActionProvider from '../config/action.provider'
import Navbar from "../component/navbar";
const ChatBotUi =()=>{
    return (
        <>
        <Navbar/>
        <div className="chatbot-ui">
           <Chatbot config={config} actionProvider={ActionProvider}  messageParser={MessageParser}></Chatbot>
        </div>
        </>
    )
}
export default ChatBotUi