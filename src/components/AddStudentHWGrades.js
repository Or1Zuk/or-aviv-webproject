import React from 'react';
import {withRouter} from 'react-router-dom';
import Card from "react-bootstrap/Card";


class AddStudentHWGrades extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.history.location.id,
            hw1: this.props.history.location.hw1,
            hw2: this.props.history.location.hw2,
            hw3: this.props.history.location.hw3,
            hw4: this.props.history.location.hw4,
            edit:this.props.history.location.edit,
            data: '',
            getData: true
        }
    }

    componentDidMount = async (prevProps) => {
        const datas = await fetch('/HW_Grades')
        const dataa = await datas.json();
        this.setState({data: dataa, getData: true})
        document.getElementById('id').disabled = this.state.edit;

    }

    postData = async (data = {}) => {
        if(this.state.edit)
        {
            const response = await fetch('/updateRowHWGrades', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
        }
        else
        {
            const response = await fetch('/addRowHWGrades', {
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
                if (this.state.hw1 === "") {
                    this.state.hw1 = "NULL";
                }
                if (this.state.hw2 === "") {
                    this.state.hw2 = "NULL";
                }
                if (this.state.hw3 === "") {
                    this.state.hw3 = "NULL";
                }
                if (this.state.hw4 === "") {
                    this.state.hw4 = "NULL";
                }
            }
            else {
                if (this.state.hw1 === undefined) {
                    this.state.hw1 = "NULL";
                }
                if (this.state.hw2 === undefined) {
                    this.state.hw2 = "NULL";
                }
                if (this.state.hw3 === undefined) {
                    this.state.hw3 = "NULL";
                }
                if (this.state.hw4 === undefined) {
                    this.state.hw4 = "NULL";
                }
            }
            this.postData({
                id: this.state.id,
                hw1: this.state.hw1,
                hw2: this.state.hw2,
                hw3: this.state.hw3,
                hw4: this.state.hw4
            });
            return (
                this.props.history.push('/HW_Grades')
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
                    <h1 id='loginTitle'>{this.state.edit? 'Update HW Grades' : 'Add Student HW Grades'}</h1>
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
                                <label class="control-label col-sm-2" htmlFor="hw1" style={{color:'black', fontSize:18}}>HW 1: </label>
                                <input type="int" name="hw1" value={this.state.hw1} onChange={(event) => {
                                    this.setState({
                                        hw1: event.target.value
                                    })
                                }}/>
                            </div>
                            <div className="form-group">
                                <label class="control-label col-sm-2" htmlFor="hw2" style={{color:'black', fontSize:18}}>HW 2: </label>
                                <input type="int" name="hw2" value={this.state.hw2} onChange={(event) => {
                                    this.setState({
                                        hw2: event.target.value
                                    })
                                }}/>
                            </div>
                            <div className="form-group">
                                <label class="control-label col-sm-2" htmlFor="hw3" style={{color:'black', fontSize:18}}>HW 3: </label>
                                <input type="int" name="hw3" value={this.state.hw3} onChange={(event) => {
                                    this.setState({
                                        hw3: event.target.value
                                    })
                                }}/>
                            </div>
                            <div className="form-group">
                                <label class="control-label col-sm-2" htmlFor="hw4" style={{color:'black', fontSize:18}}>HW 4: </label>
                                <input type="int" name="hw4" value={this.state.hw4} onChange={(event) => {
                                    this.setState({
                                        hw4: event.target.value
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


export default withRouter(AddStudentHWGrades);
