import React from "react";
import Card from "react-bootstrap/Card";
import orAviv from "../img/orAviv.jpeg";


export default function About() {
    return (
        <div>
            <center>
                <Card style={{width: '40rem' , marginTop: '3rem', background: 'rgba(236, 216, 198, 0.8)'}} >
                    <Card.Body>
                        <Card.Text >
                            <h2><b>Ort Braude - Web Technologies Course</b></h2>
                            <p>Web site to organize students grades.<br></br> 
                            Client side uses react, html, css and bootstrap<br></br>
                            Server side uses NodeJS<br></br>
                            Database with msSQL<br></br></p>
                            <h4>Developed by Or Zuk and Aviv Ariel</h4>
                        </Card.Text>
                        <img alt="" src={orAviv} class='card-img' style={{maxWidth:'50%', maxHeight:'50%'}} />
                    </Card.Body>
                </Card>
            </center>
        </div>
    )
}
