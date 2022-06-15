import React from 'react';
import {withRouter} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import StudentLabGradeTable from "./StudentLabGradeTable";
import {redirectIfNotStudent} from "../Authorization";


class MyLabGrades extends React.Component {
    constructor(props) {
        super(props); 
        redirectIfNotStudent(props);
        this.state = {
            responseData: null,
        }
    }

    componentDidMount = async () => {
        const setState = this.setState.bind(this);
        let userDetails = JSON.parse(sessionStorage.getItem('User'));
        const requestMsg = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    ID: userDetails.ID,
                    Password: userDetails.Password
                })
        };

        await fetch('/getUserLabGrades', requestMsg)
            .then((res) => res.json())
            .then(function (response) {
                setState({responseData: response})
            });
    };

    render() {     
        return (
            <div className="MyLabGrades" >
                <center>
                    <Card style={{width: '50rem', marginTop: '2rem', background: 'rgba(236, 216, 198, 0.8)'}}>
                        <Card.Body>
                            <Card.Title><h2>My Lab Grades</h2></Card.Title>
                            {this.state.responseData === null ?
                                <div>Loading</div>
                                :
                                Object.keys(this.state.responseData).length === 0 ?
                                    <div>No Available Grades</div>
                                    :
                                    <div style={{backgroundColor:"white"}}>{<StudentLabGradeTable tableData={this.state.responseData}/>}</div>
                            }
                        </Card.Body>
                    </Card>
                </center>
            </div>
        )
    }
}


export default withRouter(MyLabGrades);
