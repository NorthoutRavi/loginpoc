import React from 'react';
import {useDispatch} from "react-redux"
import {Button} from "reactstrap";
import "./Style.css";
import {LOGOUT} from "../../constant/type";

function Logout() {
    const dispatch = useDispatch()

    const fnLogout=()=>{
        dispatch({type:LOGOUT})
    }
    return (
        <div>
            <Button className="logouButton" onClick={fnLogout}>Logout</Button>
        </div>
    )
}

export default Logout
