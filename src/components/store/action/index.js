import {AUTH_LOGIN,USER_REGISTER} from "../../constant/type";
// import axios from "axios"

export const fngetLogin = (data)=>{
    // return (dispatch)=>{
    //     axios.get("ulr")
    // .then(res=>{
    //     return dispatch({
    //         type:AUTH_LOGIN,
    //         payload:res.data
    //     })
    // })
    // }
    
    return (dispatch)=>{
        dispatch({
            type:AUTH_LOGIN,
            payload:data
        })
    }
}

export const fnuserRegister=(userData)=>{
    return(dispatch)=>{
        dispatch({
            type:USER_REGISTER,
            payload:userData
        })
    }
}