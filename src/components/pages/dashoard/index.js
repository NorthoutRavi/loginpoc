import React from 'react';
import {useSelector} from "react-redux"
import { Card,  CardBody, CardTitle} from 'reactstrap';
import "./Style.css";
import Logout from "../../common/logout"

function Dashboard() {
    const userData = useSelector(state=>state.userInfo);
    console.log(userData)
    return (
        <div >
            <Logout />
            <Card className="containers">
                <CardBody>
                    <img width="200px" height="200px" src={userData.imgUrl} alt="Profle Pic" />
                </CardBody>
                <CardBody>
                    <CardTitle>Name : {userData.name}</CardTitle>
                    <p>Eamil : {userData.email}</p>
                </CardBody>
            </Card>  
        </div>
    )
}

export default Dashboard
