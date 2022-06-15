import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Welcome from './components/Welcome'
import HWGradesTable from './components/HWGradesTable'
import LabsGradesTable from './components/LabsGradesTable'
import AddStudentHWGrades from './components/AddStudentHWGrades'
import AddStudentLabGrades from './components/AddStudentLabGrades'
import MyHWGrades from "./components/MyHWGrades";
import MyLabGrades from "./components/MyLabGrades";
import About from "./components/About";
import background from "./img/background.jpeg"
import Account from './components/Account';
import HWGrades from './components/HWGrades';
import LabGrades from './components/LabGrades';
import AverageGrades from './components/AverageGrades';
import RemoveStudentHWGrades from './components/RemoveStudentHWGrades';
import RemoveStudentLabGrades from './components/RemoveStudentLabGrades';

class App extends React.Component {
    constructor(props) {
        super(props);
        sessionStorage.clear();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather+Sans:ital,wght@1,500&display=swap" rel="stylesheet" />       
                    <Router>
                        <div>
                            <NavBar />
                        </div>
                        <img alt="" src={background} style={{ position: 'absolute', width: '100vw', height: '100vh', repeat: 'no-repeat', left: 0, top: 0, bottom: 0, right: 0, zIndex: -1 }} />          
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/home">
                            <div>
                                <Home />
                            </div>
                        </Route>
                            <Route path="/hw_grades" component={HWGrades} />
                            <Route path="/lab_grades" component={LabGrades} />
                            <Route path="/HWGradesTable" component={HWGradesTable} />
                            <Route path="/LabsGradesTable" component={LabsGradesTable} />
                            <Route path="/AddStudentHWGrades" component={AddStudentHWGrades} />
                            <Route path="/AddStudentLabGrades" component={AddStudentLabGrades} />
                            <Route path="/RemoveStudentHWGrades" component={RemoveStudentHWGrades}/>
                            <Route path="/RemoveStudentLabGrades" component={RemoveStudentLabGrades}/>
                            <Route path="/MyHWGrades" component={MyHWGrades} />
                            <Route path="/MyLabGrades" component={MyLabGrades} />
                            <Route path="/AverageGrades" component={AverageGrades} />
                            <Route path="/About" component={About} />
                            <Route path="/Account" component={Account} />
                    </Switch>           
                    </Router>          
            </div>
        );
    }
}
export default App;

