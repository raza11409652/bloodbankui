import { Suspense } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import BloodBank from "../ui/bank/bank"
import Chat from "../ui/chat/chat"
import ChatBotUi from "../ui/chatbots"
import Dash from "../ui/dash/dash"
import Home from "../ui/home/home"
import Login from "../ui/login/login"
import Register from "../ui/register/register"
import ProtectedRoute from "./protected.routes"

const Routes =()=>{

    return(
    <Suspense fallback={(<div>Website is getting ready ....</div>)}>
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/bloodbank/:state/:city" component={BloodBank}/>
            <ProtectedRoute exact path="/dash" component={Dash}></ProtectedRoute>
            <ProtectedRoute exact path="/chat/" component={Chat}></ProtectedRoute>
            <Route exact path="/chat/bot" component={ChatBotUi}/>
        </Switch>
        </BrowserRouter>
    </Suspense>
    )
}
export default Routes 