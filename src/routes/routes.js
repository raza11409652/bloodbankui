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
import GetRequested from '../ui/getrequested'
import CampSchedule from "../ui/camp/camp.schdule"
import CampSearch from "../ui/camp/camp.search"
import About from "../ui/dash/about"

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
            <ProtectedRoute exact path="/blood/request" component={GetRequested}/>
            <ProtectedRoute exact path="/camp/sechdule" component={CampSchedule}/>
            <Route exact path="/camp/search" component={CampSearch}/>
            <Route exact path="/about" component={About}/>
        </Switch>
        </BrowserRouter>
    </Suspense>
    )
}
export default Routes 