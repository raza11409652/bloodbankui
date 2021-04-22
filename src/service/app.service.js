import axios from 'axios'
import server from '../config/server.config';

const searchBank = async ({ query }) => {
    const url = server.bloodbank + "?city=" + query
    console.log(url);
    return await axios.get(url).then(data => {
        return data.data
    }).catch(er => {
        console.log(er);
        return null
    });
}

const requestBloodInit = async ({ data, token }) => {
    const url = server.bloodRequest
    console.log(url);
    return await axios.post(url, data, {
        headers: {
            'auth-token': token
        }
    }).then(data => {
        console.log(data);
        return data.data
    }).catch(er => {
        console.log(er);
        return null
    });

}

const getRequestedBlood = async ({ token }) => {
    const url = server.getBlood
    return await axios.get(url, {
        headers: {
            'auth-token': token
        }
    }).then(data => {
        return data.data
    }).catch(er => {
        console.log(er);
        return null
    });
}
const modifyRequest =  async({formdata , token})=>{
    return await axios.post(server.markRequest, formdata, {
        headers: {
            'auth-token': token
        }
    }).then(data => {
        console.log(data);
        return data.data
    }).catch(er => {
        console.log(er);
        return null
    });
}
export { searchBank, requestBloodInit , getRequestedBlood , modifyRequest }