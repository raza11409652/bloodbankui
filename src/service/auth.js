import axios from 'axios'
import server from '../config/server.config'
const loginService =async ({formData})=>{
  return await  axios.post(server.login , formData).then(data=>{
        // console.log(data.data);
        return data.data
    }).catch(er=>{
        console.log(er);
        return null
    });
}
const registerService =async ({formData})=>{
    return await  axios.post(server.register , formData).then(data=>{
        // console.log(data.data);
        return data.data
    }).catch(er=>{
        console.log(er);
        return null
    });
}
const accesstokenLogin = async({token})=>{
    return await axios.get(server.accesstoken , {
        headers:{
            'auth-token':token
        }
    }).then(data=>{
        return data.data
    }).catch(er=>{
        return null
    })
}
const searchUser = async({token , query})=>{
    const url  =server.searchuser +query
    return await axios.get(url, {
        headers:{
            "auth-token":token
        }
    }).then(data=>{
        return data.data
    }).catch(er=>{
        console.log(er);
        return null
    })
}
const singleUserData = async({ uid})=>{
    const url = server.singleUser +uid
    return await axios.get(url).then(data=>{

        return data.data
    }).catch(er=>{
        return null
    })
}

export {loginService ,registerService , accesstokenLogin , searchUser , singleUserData }