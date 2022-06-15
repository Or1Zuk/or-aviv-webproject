import React from "react";


class StudentHWGradeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tableData: props.tableData};
    };

    renderStudentGrades(col) {
        let hwArray = [col.hw1, col.hw2, col.hw3, col.hw4];
        let hwCounter = 0;
        let gradesSum = 0;
        for (let i = 0 ; i < 4 ; i++) {
            if(hwArray[i] !== null) {
                hwCounter++;
                gradesSum+= hwArray[i];
            }
        }

        let average = gradesSum / hwCounter;

        return (
            <tbody>
            <tr>
                <th scope="row">HW 1</th>
                <td>{col.hw1}</td>
            </tr>
            <tr>
                <th scope="row">HW 2</th>
                <td>{col.hw2}</td>
            </tr>
            <tr>
                <th scope="row">HW 3</th>
                <td>{col.hw3}</td>
            </tr>
            <tr>
                <th scope="row">HW 4</th>
                <td>{col.hw4}</td>
            </tr>
            <tr>
                <th scope="row" style={{fontWeight:'1000'}}>Average</th>
                <td style={{fontWeight:'1000'}}>{average}</td>
            </tr>
            </tbody>
        )
    };

    render() {
        return (
            <div>
                <table class="table table-bordered" >
                <thead class="thead-dark">
                <tr>
                <th scope="col">HW Number</th>
                <th scope="col">Grade</th>
                </tr>
                </thead>
                    {this.state.tableData.map(this.renderStudentGrades)}
                </table>
            </div>
        );
    }


}


export default StudentHWGradeTable;