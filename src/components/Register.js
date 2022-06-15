import React from 'react'
import {withRouter} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FullName: '',
            password: '',
            ID: '',
            userType: '',
            role: 'student',
            data: '',
            getData: false
        };

        this.onValueChange = this.onValueChange.bind(this);
    }


    registration = async (e) => {
        e.preventDefault();
        let FullName = this.state.FullName;
        let password = this.state.password;

        if (FullName === "" || password === "") {
            alert("You must enter FullName and password");
            return;
        }
        let english = /^[A-Za-z0-9]*$/;
        if (!english.test(FullName)) {
            alert("FullName must be in english letters.");
            return;
        }
        if (password.length <= 1) {
            alert("Password must be greater then 1");
            return;
        }

        const requestMsg = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: 'Register',
                    ID: this.state.ID,
                    FullName: this.state.FullName,
                    Password: this.state.password,
                    role: this.state.role
                })
        };

        console.log("requesting");

        const response = await fetch('/register', requestMsg)
        console.log(response);
        if (!response.ok) {
            alert('Invalid Registration Details');
            return;
        }
        const responseData = await response.json();
        console.log(responseData);
        alert('Registered! Please login.')
        return (this.props.history.push('/'));

    };

    onValueChange() {
        let role = this.state.role;
        if(role === 'student')
        {
            this.setState({
                role:'lecturer'
            });
        }
        else
        {
            this.setState({
                role:'student'
            });
        }
    }

    backFunc = async () => {
        return (this.props.history.push('/'));
    };

    render() {
        return (
            <div>
                <center><h3 style={{fontFamily: 'Merriweather Sans, sans-serif'}}>Registration</h3></center>
                <div>
                    <Form onSubmit={this.registration}>
                        <Form.Group controlId="fID">
                            <Form.Label>Personal ID</Form.Label>
                            <Form.Control
                                id='regEmail'
                                placeholder="Insert id number..."
                                value={this.state.ID}
                                onChange={e => this.setState({ID: e.target.value})}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="fFullName">
                            <Form.Label>FullName</Form.Label>
                            <Form.Control
                                placeholder="Insert your name..."
                                value={this.state.FullName}
                                onChange={e => this.setState({FullName: e.target.value})}
                                required/>
                        </Form.Group>

                        <Form.Group controlId="fPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Insert password..."
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                                required />
                        </Form.Group>
                        
                        <fieldset>
                            <Form.Group controlId="fUserType" value={this.state.userType}>
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Form.Switch
                                    id='student'
                                    type='checkbox'
                                    label="I am a lecturer"
                                    onChange={this.onValueChange}
                                > 
                                </Form.Switch>
                                
                            </Form.Group>
                        </fieldset>
                        <center>
                        <button class="btn btn-secondary" type="submit" id='registerBtn'> Register </button>
                        </center>
                        <br></br><a herf='#' onClick={this.backFunc}>I'm allready a user, log me in</a>
                    </Form>

                </div>
            </div>
        );
    }
}


export default withRouter(Register);
