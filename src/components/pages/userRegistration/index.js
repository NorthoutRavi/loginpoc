import React, { Component } from 'react';
import {Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/images/logo.png"
import "./style.css";
import {connect} from "react-redux";
import {fnuserRegister} from "../../store/action";


export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: "",
            email:'',
            mobile:''
        }
    }
    fnonChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    fnRegister=(event)=>{
        event.preventDefault()
        this.props.fnRegister(this.state);
        this.setState({name:'', email:"",mobile:'',password:""})
        alert("User Regiser Successully !!")
    }


    

    render() {
        return (
        <section className="login_container">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <Col sm="7" className="logn_bg">
                        <img src={Logo} className="brand_log" alt="Northout Logo" />
                        <div className="login_content">
                            <h1>Welcome to Northout com</h1>
                        </div>
                    </Col>
                    <Col sm="5" className="reg-container">
                        <div >
                            <h1>Register</h1>
                            <Form onSubmit={this.fnRegister}>
                                <FormGroup>
                                    <Label for="name">Username</Label>
                                    <Input type="text" 
                                    value={this.state.name} 
                                    name="name" 
                                    id="name" 
                                    placeholder="Username"
                                     required 
                                     onChange={this.fnonChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="text" 
                                    value={this.state.email} 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email"
                                     required 
                                     onChange={this.fnonChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="mobile">Mobile</Label>
                                    <Input type="text" 
                                    value={this.state.mobile} 
                                    name="mobile" 
                                    id="mobile" 
                                    placeholder="Mobile"
                                     required 
                                     onChange={this.fnonChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" 
                                    value={this.state.password} 
                                    name="password" 
                                    id="examplePassword" 
                                    placeholder="********"
                                    required 
                                    onChange={this.fnonChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit" className="reg_btn" >REGISTER</Button>
                                    <p>Having account ! <Link to="/login"> Login </Link> </p>
                                </FormGroup>
                            </Form>
                        </div>
                    </Col>
                </div>
            </div>
        </section>

        )
    }
}


const mapDispatchToProps = {
    fnRegister : fnuserRegister
}
export default connect(null, mapDispatchToProps)(Login)

