import Toastify from "toastify";

const alertSuccess = ({msg})=>{
    Toastify.success("Success" , msg)
}
const alertWarning = ({msg})=>{
    Toastify.warning("Warning" , msg)
}
const alertError =({msg})=>{
    Toastify.error("Error" , msg)
}

export  {alertError  ,alertSuccess , alertWarning}