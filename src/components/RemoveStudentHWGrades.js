import React from 'react';
import {withRouter} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import warning from '../img/warning.png';

class RemoveStudentHWGrades extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.history.location.id
        }
    }


    handleRemoveButtonClick = async (state) => {
        const requestMsg = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    title: 'RemoveRow',
                    id: this.state.id
                })
        };
        console.log("id: "+this.state.id)
        var response = fetch('/RemoveStudent', requestMsg);
        await response;
        //alert('Deleted');
        console.log(response);
        return this.props.history.push('/HW_Grades');
    };

    handleCancelButtonClick = async () => {
        this.props.history.push('/HW_Grades')
    };

    render(){
        return(
            <div>
                <center>
                    <Card style={{width: '60rem', marginTop: '2rem', background: 'rgba(236, 216, 198, 0.8)'}}>
                        <div style={{paddingBottom: '40px'}}>
                        <h1 style={{display: 'inline'}}>Are you sure you want to delete student number {this.state.id}?</h1>
                        <img alt="" src={warning} width="100"/>
                        </div>
                        <div style={{paddingBottom: '40px'}}>
                        <button class="btn btn-danger" onClick={this.handleRemoveButtonClick} style={{marginRight: '25px', paddingInline: '50px'}}>yes</button>
                        <button class="btn btn-secondary" onClick={this.handleCancelButtonClick} style={{paddingInline: '50px'}}>cancel</button>
                        </div>
                    </Card>
                </center>
            </div>
        );
    }
}

export default withRouter(RemoveStudentHWGrades);