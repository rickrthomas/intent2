import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavComponent from './components/Nav';
import Footer from './components/Footer';

import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import ExerciseList from "./components/exercise-list.component";

import EditExercise from "./components/edit-exercise.component";
import HealRequestForm from './components/HealRequestForm';
import Instructions from './components/Instructions';
import About from './components/About';
import Resources from './components/Resources';
import Circle from './Circle';

import AskSend from './components/AskSend';
import Disclaimer from './components/Disclaimer';

/* import Login from './components/Login'; */


class App extends Component {



  render(){
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <NavComponent />
      </header>
  
       <Route exact path='/' component={ExerciseList} />
        {/* <Route path='/createaccount' component={Login} />
        */}
        <Route path='/instructions' component={Instructions} />
       <Route path='/healrequestform' component={HealRequestForm} />
      <Route path='/about' component={About} />
      <Route path='/resources' component={Resources} />
      <Route path='/circle' component={Circle} />
      <Route path='/disclaimer' component={Disclaimer} />

      <Route path='/home' exact component={AskSend} />
      
      <Route path='/edit/:id' component={EditExercise} />
    

      <Route path='/create' component={CreateExercise} />
      <Route path='/user' component={CreateUser} />
      
      
              <div className="footer">
                <Footer />
              </div>
    </div>
    
    </Router>
  );
}
};

export default App;
