import React, { Component, useState } from 'react';
import {Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {Link} from "react-router-dom"
import FacebookLogin from "react-facebook-login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/images/logo.png"
import "./style.css";
import {connect} from "react-redux";
import {fngetLogin} from "../../store/action";
import GoogleLogin from 'react-google-login';


const Login =(props)=> {
    const [name, setName] =useState('')
    const [password, setPassword] =useState('')
    
    

    const fnLogin=(event)=>{
        event.preventDefault();
        const userData= props.userList
        let loginUser = userData.length > 0 ? userData.find(user=>user.name ===name && user.password ===password): undefined
        if(loginUser===undefined){
            alert("Invalied userid and passoword")
        }else{
            props.fnLogin(loginUser)
        }
    }

    const componentClicked=(response)=>{
        console.log(response)
    }

    const responseFacebook=(response)=>{
        console.log("clicked",response)
        if(response){
            const resp = {name:response.name, imageUrl:response.picture.data.url}
        props.fnLogin(resp)
        }else{
            alert("Somthing went wrong")
        }
        
    }
    const responseGoogle=(respinse)=>{
        console.log(respinse)
        props.fnLogin(respinse.profileObj)
    }

        return (
        <section className="login_container">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <Col sm="7" className="logn_bg">
                        <img src={Logo} className="brand_log" alt="Northout Logo" />
                        <div className="login_content">
                            <h1>Welcome to Northout</h1>
                        </div>
                    </Col>
                    <Col sm="5" className="login-container">
                        <div >
                            <h1>Login</h1>
                            <Form onSubmit={fnLogin}>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" 
                                    value={name} 
                                    name="name" 
                                    id="username" 
                                    placeholder="Username"
                                     required 
                                     onChange={(ev)=>setName(ev.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" 
                                    value={password} 
                                    name="password" 
                                    id="examplePassword" 
                                    placeholder="********"
                                    required 
                                    onChange={(ev)=>setPassword(ev.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Button className="login_btn" type="submit" >SIGN IN</Button>
                                    <p>Don't have account ! <Link to="/register">Register </Link> </p>
                                </FormGroup>
                            </Form>
                                <FacebookLogin
                                appId="264132574702951"
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={componentClicked}
                                callback={responseFacebook} />
                                <br/>
                                <GoogleLogin
                                    className="loginBtn"
                                    clientId="542036815989-783shn85jdkdfoesfuda3vcqim1mkrvp.apps.googleusercontent.com"
                                    buttonText="Login With Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />

                        </div>
                    </Col>
                </div>
            </div>
        </section>

        )
    }

const mapStateToprops=(state)=>{
    return{
        isLogin:state.isLoggedin,
        userList:state.userList
    }
}

const mapDispatchToProps = {
    fnLogin : fngetLogin
}
export default connect(mapStateToprops, mapDispatchToProps)(Login)
