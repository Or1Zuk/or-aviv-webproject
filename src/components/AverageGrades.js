import React from 'react';
import {withRouter} from 'react-router-dom';
import {Bar} from 'react-chartjs-2';


class AverageGrades extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            students: [
                {id: '', lab1: '', lab2: '', lab3: '', lab4: '', hw1: '', hw2: '', hw3: '', hw4: ''},
            ],
            Average: [
                {lab1: '', lab2: '', lab3: '', lab4: '', hw1: '', hw2: '', hw3: '', hw4: ''}
            ]
        }
        this.state.columns = this.columns;
    }

    merge(arrays, key) {
        var r = [],
            hash = Object.create(null);
    
        arrays.forEach(function (a) {
            a.forEach(function (o) {
                if (!hash[o[key]]) {
                    hash[o[key]] = {};
                    r.push(hash[o[key]]);
                }
                Object.keys(o).forEach(function (k) {
                    hash[o[key]][k] = o[k];
                });
            });
        });
        return r;
    }

    get columns() {
        return [
            {
                name: "Edit/Remove",
                accessor: "Edit"
            },
            {
                name: "id",
                accessor: "id"
            },
            {
                name: "Lab 1",
                accessor: "lab1"
            },
            {
                name: "Lab 2",
                accessor: "lab2"
            },
            {
                name: "Lab 3",
                accessor: "lab3"
            },
            {
                name: "Lab 4",
                accessor: "lab4"
            },
            {
                name: "HW 1",
                accessor: "hw1"
            },
            {
                name: "HW 2",
                accessor: "hw2"
            },
            {
                name: "HW 3",
                accessor: "hw3"
            },
            {
                name: "HW 4",
                accessor: "hw4"
            }
        ];
    }

    componentDidMount = async (prevProps) => {
        const labData = await fetch('/lab_grades');
        const hwData = await fetch('/hw_grades');
        const labData_json = await labData.json();
        const hwData_json = await hwData.json();

        const merged = this.merge([labData_json, hwData_json], 'id');
        console.log(merged);
        
        this.setState({students: merged, getData: true});
    };


    

    render() {
        let allGrades = this.state.students;
        let arrSum = [0,0,0,0,0,0,0,0]
        let numStudents = [0,0,0,0,0,0,0,0]
        for (let index = 0; index < allGrades.length; index++) {
            if (allGrades[index].lab1 != undefined) {
               arrSum[0] += allGrades[index].lab1;
               numStudents[0]++;
            }
            if (allGrades[index].lab2 != undefined) {
                arrSum[1] += allGrades[index].lab2;
                numStudents[1]++;
            }
            if (allGrades[index].lab3 != undefined) {
                arrSum[2] += allGrades[index].lab3;
                numStudents[2]++;
            }
            if (allGrades[index].lab4 != undefined) {
                arrSum[3] += allGrades[index].lab4;
                numStudents[3]++;
            }
            if (allGrades[index].hw1 != undefined) {
                arrSum[4] += allGrades[index].hw1;
                numStudents[4]++;
            }
            if (allGrades[index].hw2 != undefined) {
                arrSum[5] += allGrades[index].hw2;
                numStudents[5]++;
            }
            if (allGrades[index].hw3 != undefined) {
                arrSum[6] += allGrades[index].hw3;
                numStudents[6]++;
            }
            if (allGrades[index].hw4 != undefined) {
                arrSum[7] += allGrades[index].hw4;
                numStudents[7]++;
            }

        }
        console.log(numStudents);
        for (let index = 0; index < 8; index++) {
            arrSum[index] /= numStudents[index];
        }
        const details = {
            labels: ['Lab 1 (' + numStudents[0] + ' Students)', 'Lab 2 ('+ numStudents[1] + ' Students)', 'Lab 3 (' + numStudents[2] + ' Students)',
             'Lab 4 (' + numStudents[3] + ' Students)', 'HW 1 (' + numStudents[4] + ' Students)', 'HW 2 (' + numStudents[5] + ' Students)',
              'HW 3 (' + numStudents[6] + ' Students)', 'HW 4 (' + numStudents[7] + ' Students)'],
            datasets: [
                {
                    label: 'average',
                    backgroundColor: 'rgba(179, 255, 102, 0.8)',
                    borderColor: 'rgba(179, 255, 102, 1)',
                    borderWidth: 2,
                    data: arrSum,            
                }
            ]
        }
        return (
            <div className="Grades">             
                <center>                   
                    <div style={{
                        width: "600px",
                        height: "300px", backgroundColor: 'white', marginTop: '20px'
                    }}>
                    <Bar
                        data={details}
                        options={{
                            title: {
                                display: true,
                                text: 'Average',
                                fontSize: 40,

                            },
                            legend: {
                                display: true,
                                position: 'right',                              
                            },
                            scales: {
                                yAxes: [{
                                  ticks: {
                                    beginAtZero: true
                                  }
                                }]
                              }
                        }}
                    /> 
                    </div>
                </center>
            </div>
        )
    }
}


export default withRouter(AverageGrades);