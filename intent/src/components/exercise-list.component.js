import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Person = props => (
        

       
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        <hr></hr>
                        
                        </div>    
                        <h4 className="col s12 m12">{props.exercise.first} {props.exercise.last}</h4>
                        <hr></hr>
                        
                        <button onSubmit={props.onSubmit} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></button>
                        <div className="card-content">
                            <div className="row">
                            <p className="col s12 m6">DATE ADDED</p>
                            <hr></hr>
                                
                            
                           

                            <div className="col s12 m6">    
                            <p>ADDED BY</p>
                            <hr></hr>
                            <p>{props.exercise.yourname}</p>
                            </div>
                            
                                </div>
                                <h4 className="col s12 m12">ABOUT THE PERSON TO BE HEALED</h4>
                                <div className="row">
                                <div className="col s12 m6">
                                    <p>GENDER</p>
                                    <hr></hr>
                                <p>{props.exercise.gender}</p>
                                </div>
                                <div className="col s12 m6">
                                <p>AGE</p>
                                <hr></hr>
                                <p>{props.exercise.age}</p>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col s12 m6">
                                <p>CITY</p>
                                <hr></hr>
                                <p>{props.exercise.city}</p>
                                </div>
                                <div className="col s12 m6">
                                <p>REGION</p>
                                <hr></hr>
                                <p>{props.exercise.region}</p>
                                </div>
                                <div className="col s12 m6">
                                <p>COUNTRY</p>
                                <hr></hr>
                                <p>{props.exercise.country}</p>
                                </div>
                                </div>
                                <h5 className="col s12 m12">CONDITIONS</h5>
                                <hr></hr>
                                <div className="col s12 m12">
                                <p>{props.exercise.condition}</p>
                                </div>
                              
                                
                        
                        </div>
                     
                    </div>
                </div>
            
)



const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        
        <td>{props.exercise.first}</td>
        <td>{props.exercise.last}</td>
        <td>{props.exercise.gender}</td>
        <td>{props.exercise.age}</td>
        <td>{props.exercise.city}</td>
        <td>{props.exercise.stateregion}</td>
        <td>{props.exercise.country}</td>
        <td>{props.exercise.yourname}</td>
        <td>{props.exercise.email}</td>
        <td>{props.exercise.condition}</td>
        
       

        <td> <Link to="/" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</Link>
        </td>
    </tr>
)

class ExerciseList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {exercises: []};
    }
        componentDidMount() {
            axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState ({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
        }
    
        deleteExercise(id) {
            axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data));
            
            window.location ='/';
        }
        
        onSubmit(id){
            axios.post('http://localhost:5000/innercircle/')
            .then(res => console.log(res.data));
        }
    

        exerciseList() {
            return this.state.exercises.map(currentexercise => {
                return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
            })
        }

        personList() {
            return this.state.exercises.map(currentexercise => {
                return <Person exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
            })
        }

       

    render() {
        return (
        <div>
            
                <h3>PERSONS TO HEAL</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                           
                            <th>First</th>
                            <th>Last</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>State / Region</th>
                            <th>Country</th>
                            <th>Your Name</th>
                            <th>Email</th>
                            <th>Condition</th>
                            <th>Date</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            <div className="container">
                {this.personList()}
            </div>
         
        </div>    
        )
    };
}

export default ExerciseList;