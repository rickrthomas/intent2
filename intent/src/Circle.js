import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

const PersonToHeal = props => (
    <tr>
        <td>{props.persontoheal.first}</td>
        <td>{props.persontoheal.last}</td>
        <td>{props.persontoheal.gender}</td>
        <td>{props.persontoheal.age}</td>
        <td>{props.persontoheal.city}</td>
        <td>{props.persontoheal.stateRegion}</td>
        <td>{props.persontoheal.country}</td>
        <td>{props.persontoheal.yourName}</td>
        <td>{props.persontoheal.email}</td>
        <td>{props.persontoheal.condition}</td>
        <td>{props.persontoheal.date}</td>
        <td>{props.persontoheal.profile}</td>

       
        <td><Link to={"/edit/"+props.persontoheal._id}>edit</Link> | <Link to="/" onClick={() => { props.deleteExercise(props.persontoheal._id) }}>delete</Link>
        </td>
    </tr>
)

class Circle extends Component {
    constructor(props) {
        super(props);
     
        this.state = {persons: []};
    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/persons/')
        .then(response => {
            this.setState ({ persons: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/persons/' + id)
        .then(res => console.log(res.data));

        this.setState({
            persons: this.state.persons.filter( el => el._id !== id)

        })
    }

    personsList() {
        return this.state.persons.map(currentperson => {
            return <PersonToHeal person={currentperson} deletePerson={this.deletePerson} key={currentperson._id} />;
        })
    }


    render(){
    return(
        <div className="container">
                <h3>Persons To Heal</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Value</th>
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
                            <th>Profile</th>

                        </tr>



                    </thead>
                    <tbody>
                        { this.personsList() }
                    </tbody>
                </table>
            </div>
    )
}
}
export default Circle;