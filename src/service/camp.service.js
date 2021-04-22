const axios = require('axios').default
const server = require('../config/server.config')
const newcamp = async ({ formdata, token }) => {
    return await axios.post(server.newCamp, formdata, {
        headers: {
            'auth-token': token
        }
    }).then(data => {
        // console.log(data);
        return data.data
    }).catch(er => {

        console.log(er);
        return null
    })

}

const getCamps =async ()=>{
    return await axios.get(server.getcamp).then(data=>{
        return data.data
    }).catch(er=>{
        return null
    })
}


export {newcamp , getCamps}