import React from 'react';
import {withRouter} from 'react-router-dom';
import Card from "react-bootstrap/Card";


class AddStudentLabGrades extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.history.location.id,
            lab1: this.props.history.location.lab1,
            lab2: this.props.history.location.lab2,
            lab3: this.props.history.location.lab3,
            lab4: this.props.history.location.lab4,
            edit:this.props.history.location.edit,
            data: '',
            getData: true
        }
    }

    componentDidMount = async (prevProps) => {
        const datas = await fetch('/Lab_Grades')
        const dataa = await datas.json();
        this.setState({data: dataa, getData: true})
        document.getElementById('id').disabled = this.state.edit;

    }

    postData = async (data = {}) => {
        if(this.state.edit)
        {
            const response = await fetch('/updateRowLabGrades', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
        }
        else
        {
            const response = await fetch('/addRowLabGrades', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
        }     
    }

    handleSaveRow = () => {
        if (this.state.id) {
            for (let i = 0; i < this.state.data.length; i++) {
                if(!this.state.edit)
                    if (this.state.id === this.state.data[i].id) {
                        alert('Error: Id already exists.')
                        return;
                    }
            }
            if (this.state.edit) {
                if (this.state.lab1 === "") {
                    this.state.lab1 = "NULL";
                }
                if (this.state.lab2 === "") {
                    this.state.lab2 = "NULL";
                }
                if (this.state.lab3 === "") {
                    this.state.lab3 = "NULL";
                }
                if (this.state.lab4 === "") {
                    this.state.lab4 = "NULL";
                }
            }
            else {
                if (this.state.lab1 === undefined) {
                    this.state.lab1 = "NULL";
                }
                if (this.state.lab2 === undefined) {
                    this.state.lab2 = "NULL";
                }
                if (this.state.lab3 === undefined) {
                    this.state.lab3 = "NULL";
                }
                if (this.state.lab4 === undefined) {
                    this.state.lab4 = "NULL";
                }
            }
            this.postData({
                id: this.state.id,
                lab1: this.state.lab1,
                lab2: this.state.lab2,
                lab3: this.state.lab3,
                lab4: this.state.lab4
            });
            return (
                this.props.history.push('/Lab_Grades')
            )

        } else {
            alert("Error: please insert your Id")
        }
    };

    render() {    
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <center>
                    <Card style={{width: '50rem', marginTop: '2rem', background: 'rgba(236, 216, 198, 0.8)'}}>
                    <h1 id='loginTitle'>{this.state.edit? 'Update Lab Grades' : 'Add Student Lab Grades'}</h1>
                    <div className="content">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label class="control-label col-sm-2" htmlFor="id" style={{color:'black', fontSize:18}}>Id: </label>
                                <input id="id" type="int" name="id"
                              value={this.state.id} onChange={(event) => {
                                    this.setState({
                                        id: event.target.value
                                    })
                                }}/>
                            </div>
                            <div className="form-group">
                                <label class="control-label col-sm-2" htmlFor="lab1" style={{color:'black', fontSize:18}}>Lab 1: </label>
                                <input type="int" name="lab1" value={this.state.lab1} onChange={(event) => {
                                    this.setState({
                                        lab1: event.target.value
                                    })
                                }}/>
                            </div>
                            <div className="form-group">
                                <label class="control-label col-sm-2" htmlFor="lab2" style={{color:'black', fontSize:18}}>Lab 2: </label>
                                <input type="int" name="lab2" value={this.state.lab2} onChange={(event) => {
                                    this.setState({
                                        lab2: event.target.value
                                    })
                                }}/>
                            </div>
                            <div className="form-group">
                                <label class="control-label col-sm-2" htmlFor="lab3" style={{color:'black', fontSize:18}}>Lab 3: </label>
                                <input type="int" name="lab3" value={this.state.lab3} onChange={(event) => {
                                    this.setState({
                                        lab3: event.target.value
                                    })
                                }}/>
                            </div>
                            <div className="form-group">
                                <label class="control-label col-sm-2" htmlFor="lab4" style={{color:'black', fontSize:18}}>Lab 4: </label>
                                <input type="int" name="lab4" value={this.state.lab4} onChange={(event) => {
                                    this.setState({
                                        lab4: event.target.value
                                    })
                                }}/>
                            </div>
                        </form>
                    </div>
                    <div className="footer">
                        <button type="button" class="btn btn-secondary"
                                onClick={this.handleSaveRow}>
                            Save
                        </button>
                    </div>
                    </Card>
                </center>
            </div>
        );

    }


}


export default withRouter(AddStudentLabGrades);
