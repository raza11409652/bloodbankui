
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Routes from './routes/routes';
import AuthContext from './context/authcontext'
import { useState } from 'react';
// import Chatbot from "react-chatbot-kit";
// import config from './config/chatbot.config'

function App() {
  const [user , setUser] = useState(null)
  return (
    <AuthContext.Provider value={{user , setUser}}>
      <Routes>
       
      </Routes>
    </AuthContext.Provider>
  //  <Routes></Routes>
  );
}

export default App;
