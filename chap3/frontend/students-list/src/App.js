import './App.css';
import { useEffect, useState } from "react";
import AddStudent from "./components/AddStudent"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StudentList from "./components/StudentList"


const App = () => {

  const [students, setStudents] = useState([]);

  const fetchStudent = () =>{
    fetch("http://localhost:8000/students")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setStudents(response);
        console.log(students)
      });
  }

  useEffect(() => {
    fetchStudent();
  }, []);




  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <Switch>
        <Route path="/" exact>
          <StudentList students={students}/>
        </Route>
        <Route path="/add">
          <AddStudent />
        </Route>
      </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
