import React from 'react'
import {withRouter} from 'react-router-dom';
import Form from "react-bootstrap/Form";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ID: '',
            FullName: '',
            password: '',
            data: '',
            getData: false
        }
    }


    loginUser = async () => {
        const requestMsg = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    title: 'Login',
                    ID: this.state.ID,
                    Password: this.state.password,
                })
        };
        console.log("requesting");

        const response = await fetch('/login', requestMsg);

        if (!response.ok) {
            alert('Invalid Login Details');
            return;
        }
        let responseData = await response.json();
        responseData = JSON.parse(responseData.body);
        sessionStorage.setItem(
            'User',
            JSON.stringify({
                ID: this.state.ID,
                full_name: responseData.full_name,
                role: responseData.role,
            }));


        return (this.props.history.push('/home'));
    };

    newAccount = async () => {
        return (this.props.history.push('/Account'));
    };

    render() {
        return (
            <div>
                <center><h3 style={{fontFamily: 'Merriweather Sans, sans-serif'}}>Login</h3></center>
                <div>
                    <Form>
                        <Form.Group controlId="fID">
                            <Form.Label>Personal ID</Form.Label>
                            <Form.Control
                                placeholder="Insert id number..."
                                value={this.state.ID}
                                onChange={e => this.setState({ID: e.target.value})}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="fPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Insert password..."
                                value={this.state.password}
                                onChange={e => this.setState({password: e.target.value})}
                                required/>
                        </Form.Group>
                        <center>
                        <button type='button' class="btn btn-secondary" onClick={this.loginUser} >Login</button>
                        </center>
                        <br></br><a onClick={this.newAccount}>Register as a new account here</a>
                        
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
