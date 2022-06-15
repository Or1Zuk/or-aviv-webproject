import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import HWGradesTable from './HWGradesTable';
import Table from "react-bootstrap/Table";


class HWGrades extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [
                {id: '', hw1: '', hw2: '', hw3: '', hw4: ''},
            ],
            Average: [
                {hw1: '', hw2: '', hw3: '', hw4: ''}
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
                name: "HW 1",
                accessor: "hw1"
            }, {
                name: "HW 2",
                accessor: "hw2"
            },
            {
                name: "HW 3",
                accessor: "hw3"
            }, {
                name: "HW 4",
                accessor: "hw4"
            }
        ];
    }

    componentDidMount = async (prevProps) => {
        const data = await fetch('/hw_grades');
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
           
            <div className="HWGrades">             
                <center>                   
                    <Table>
                        <HWGradesTable style={{backgroundColor: 'white', borderStyle: 'groove'}} data={this.state.students}
                                     columns={this.state.columns}
                                     onPageChange={this.handlePageChange.bind(this)}
                                     onFilter={this.handleFilter.bind(this)}/>
                    </Table>
                    <Link to="/AddStudentHWGrades" class="btn btn-light">Add student</Link>
                    {this.props.onPageChange? this.renderPagination(): ''}
                </center>
            </div>
        )
    }
}


export default withRouter(HWGrades);
