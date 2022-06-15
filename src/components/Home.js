import React from "react";
import Card from "react-bootstrap/Card";
import {isUserLecturer} from "../Authorization";
import lecturerImg from '../img/lecturer.png';
import studentImg from '../img/student.png';


export default function Home() {
    return (
        <div>
            <center>
                <Card style={{width: '40rem' , marginTop: '3rem',background: 'rgba(236, 216, 198, 0.8)'}} >
                    <Card.Body>
                        <Card.Text >
                           <h1><b>Hello {JSON.parse(sessionStorage.getItem('User')).full_name}!</b></h1>
                        </Card.Text>
                        {isUserLecturer() ? <img alt="" src={lecturerImg} width="200"/> : <img alt="" src={studentImg} width="300"/>}
                        <Card.Text >
                           <h1><b>Enjoy your stay</b></h1>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )
}