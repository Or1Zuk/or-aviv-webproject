import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import edit_icon from '../img/edit-icon.png';
import remove_icon from '../img/remove.png';
import Card from "react-bootstrap/Card";


class LabsGradesTable extends React.Component {

    static propTypes() {
        return {
            data: PropTypes.array,
            columns: PropTypes.array,
            onPageChange: PropTypes.func,
            onSort: PropTypes.func,
            onFilter: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.initialState = {};

        if (props.onPageChange) {
            this.initialState.currentPage = 1;
            this.initialState.lastObject = props.data[props.data.length - 1];
        }
        if (props.onFilter) {
            this.initialState.filterInput = '';
        }
        this.state = this.initialState;
    }

    sortColumn(column) {
        if (this.props.onSort) {
            this.props.onSort(column);
        }
    }

    generateColumn(col, index) {
        return <th key={col.name} onClick={this.sortColumn.bind(this, col)}>{col.name}</th>;
    }

    showPrevious() {
        if (this.props.onPageChange) {
            this.props.onPageChange(this.state.currentPage, this.state.lastObject, this.state.currentPage - 1);
            this.setState({ currentPage: this.state.currentPage - 1 });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ lastObject: nextProps.data[nextProps.data.length - 1] });
    }


    onFilterInputChange(e) {
        this.setState({ filterInput: e.target.value });
        if (this.props.onFilter) {  
           this.props.onFilter(e.target.value);
        }
    }

    handleRemoveButtonClick = async (state) => {
        return this.props.history.push({
            pathname: '/RemoveStudentLabGrades',
            id: state.id
        })
    };

    handleEditButtonClick = (state) => {
        return this.props.history.push({
            pathname: '/AddStudentLabGrades',
            id: state.id,
            lab1: state.lab1,
            lab2: state.lab2,
            lab3: state.lab3,
            lab4: state.lab4,
            edit:true
        })
    };

    render() {   
        const { data, columns, onPageChange, onFilter, onSort, ...props } = this.props;
        return (
            <div className="react-table">
                <center>
                    <Card style={{width: '50rem', marginTop: '2rem', background: 'rgba(236, 216, 198, 0.8)'}}>
                    <h2>Students Lab Grades</h2>
                    <table  {...props}>
                        <thead>
                            <tr key="table-header">{this.props.columns.map(this.generateColumn, this)}</tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((row, rowIndex) => {
                                return (
                                    <tr key={rowIndex}>
                                        <td>
                                            <img alt="" style={{cursor: 'pointer'}} src={edit_icon} width={20} id={row.id} onClick={() => this.handleEditButtonClick(row)} />
                                            <img alt="" src={remove_icon} style={{marginLeft: '3rem', cursor: 'pointer'}} width={20} id={row.id} onClick={() => this.handleRemoveButtonClick(row)} />
                                        </td>
                                        {this.props.columns.map((col, colIndex) => {
                                            let rowHtml;
                                            if (colIndex > 0) {
                                                rowHtml = <td key={col.name + rowIndex}>{row[col.accessor.toString()]}</td>;
                                            }
                                            
                                            return rowHtml;
                                        })
                                        }                            
                                    </tr>
                                );
                            }
                            )}
                        </tbody>
                    </table>
                    </Card>
                </center>
            </div>
        )
    }


}

export default withRouter(LabsGradesTable);
