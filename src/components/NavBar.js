import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from '../img/LogoLight.png';
import '../componentsStyle.css'
import {isUserLecturer, isUserLoggedIn} from "../Authorization";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        reload: false
    };

    refreshPage = () => {
        this.setState(
            {reload: true},
            () => this.setState({reload: false})
        )
    };

    render() {
        return (
            <Navbar bg="white" className='m-auto' variant="light">
                <Navbar.Brand className="m-auto">
                    <img
                        src={logo}
                        width="140"
                        className="d-inline-block align-top"
                        alt="MyGrades"
                    />
                </Navbar.Brand>

                {isUserLoggedIn() ?
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        {!isUserLecturer() ? <Nav.Link><Link to="/MyLabGrades">My Labs Grades</Link></Nav.Link> : null}
                        {!isUserLecturer() ? <Nav.Link><Link to="/MyHWGrades">My HW Grades</Link></Nav.Link> : null}
                        {isUserLecturer() ? <Nav.Link><Link to="/Lab_Grades">Students Lab Grades</Link></Nav.Link> : null}
                        {isUserLecturer() ? <Nav.Link><Link to="/HW_Grades">Students HW Grades</Link></Nav.Link> : null}
                        {isUserLecturer() ? <Nav.Link><Link to="/AverageGrades">Average Grades</Link></Nav.Link> : null}
                        <Nav.Link><Link to="/About">About</Link></Nav.Link>
                        <Nav.Link><Link to="/" onClick={() => this.refreshPage()}>Logout</Link></Nav.Link>
                    </Nav>
                    :
                    null
                }
            </Navbar>
        );
    }
}

export default withRouter(NavBar);

