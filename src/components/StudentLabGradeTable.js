import React from "react";


class StudentLabGradeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tableData: props.tableData};
    };


    renderStudentGrades(col) {
        let labsArray = [col.lab1, col.lab2, col.lab3, col.lab4];
        let labsCounter = 0;
        let gradesSum = 0;
        for (let i = 0 ; i < 4 ; i++) {
            if(labsArray[i] !== null) {
                labsCounter++;
                gradesSum+= labsArray[i];
            }
        }

        let average = gradesSum / labsCounter;

        return (
            <tbody>
            <tr>
                <th scope="row">Lab 1</th>
                <td>{col.lab1}</td>
            </tr>
            <tr>
                <th scope="row">Lab 2</th>
                <td>{col.lab2}</td>
            </tr>
            <tr>
                <th scope="row">Lab 3</th>
                <td>{col.lab3}</td>
            </tr>
            <tr>
                <th scope="row">Lab 4</th>
                <td>{col.lab4}</td>
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
                <th scope="col">Lab number</th>
                <th scope="col">Grade</th>
                </tr>
                </thead>
                    {this.state.tableData.map(this.renderStudentGrades)}
                </table>
            </div>
        );
    }


}


export default StudentLabGradeTable;