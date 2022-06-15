import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import LabsGradesTable from './LabsGradesTable';
import Table from "react-bootstrap/Table";


class LabGrades extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [
                {id: '', lab1: '', lab2: '', lab3: '', lab4: ''},
            ],
            Average: [
                {lab1: '', lab2: '', lab3: '', lab4: ''}
            ]
        }
        this.state.columns = this.columns;
    }

    get columns() {
        return [
            {
                name: "Edit / Remove",
                accessor: "Edit"
            },
            {
                name: "id",
                accessor: "id"
            },
            {
                name: "lab 1",
                accessor: "lab1"
            }, {
                name: "lab 2",
                accessor: "lab2"
            },
            {
                name: "lab 3",
                accessor: "lab3"
            }, {
                name: "lab 4",
                accessor: "lab4"
            }
        ];
    }

    componentDidMount = async (prevProps) => {
        const data = await fetch('/lab_grades');
        const data_json = await data.json();
        this.setState({students: data_json, getData: true});
    };

    handlePageChange(oldPage, lastObject, newPage) {
        switch (newPage) {
            case 1:
                this.setState({data: this.initialData});
                break;
            case 2:
                this.setState({data: this.nextData});
                break;
            default:
                this.setState({data: this.initialData});
        }
    }

    handleFilter(filterInput) {
        if (filterInput.trim() === '') {
            this.setState({data: this.initialData});
        } else {
            let filteredData = [];
            this.state.students.forEach((element) => {
                if (element.Id === filterInput) {
                    filteredData.push(element);
                }
            });

            this.setState({data: filteredData});         
        }
    }
    

    render() {
            
        return (
           
            <div className="LabGrades">             
                <center>                   
                    <Table>
                        <LabsGradesTable style={{backgroundColor: 'white', borderStyle: 'groove'}} data={this.state.students}
                                     columns={this.state.columns}
                                     onPageChange={this.handlePageChange.bind(this)}
                                     onFilter={this.handleFilter.bind(this)}/>
                    </Table>
                    <Link to="/AddStudentLabGrades" class="btn btn-light">Add student</Link>
                    {this.props.onPageChange? this.renderPagination(): ''}
                </center>
            </div>
        )
    }
}


export default withRouter(LabGrades);
