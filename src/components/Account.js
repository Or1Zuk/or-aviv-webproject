import React from "react";
import Card from "react-bootstrap/Card";
import Register from './Register'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Account() {
    return (
        <div>
           <Container>
                <Container style={{marginTop: '1rem', width:'50%'}}>
                    <Row>
                        <Col>
                            <Card style={{background: 'rgba(236, 216, 198, 0.8)', borderRadius: 20, alignItems:'center'}}>
                                <Card.Body>
                                    <Register/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}