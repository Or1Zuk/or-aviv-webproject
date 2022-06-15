import React from 'react'
import {withRouter} from 'react-router-dom'
import Login from './Login'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import '../componentsStyle.css'



class Welcome extends React.Component {
    constructor(props) {
        super(props);
        sessionStorage.clear();
    }

    render() {
    return (
        <div>
           <Container>
                <Container style={{marginTop: '1rem',  width:'50%'}}>
                    <Row style={{width:'100%'}}>     
                        <Card style={{flex: 1, background: 'rgba(236, 216, 198, 0.8)', borderRadius: 20, alignItems:'center'}}>
                            <Card.Body>
                                <Login/> 
                            </Card.Body>
                        </Card>           
                    </Row>
                </Container>
            </Container>
        </div>
    );
    }
}
export default withRouter(Welcome);

