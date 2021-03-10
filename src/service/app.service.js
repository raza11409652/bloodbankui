import axios from 'axios'
import server from '../config/server.config';

const searchBank = async({query})=>{
    const url =server.bloodbank+"?city="+query
    console.log(url);
    return await axios.get(url).then(data=>{
        return data.data
    }).catch(er=>{
        console.log(er);
        return null
    });
}
export {searchBank}