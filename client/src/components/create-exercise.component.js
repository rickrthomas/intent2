import React, { Component } from 'react';
import axios from 'axios';
import TextareaAutosize from 'react-autosize-textarea';

import "react-datepicker/dist/react-datepicker.css";

class CreateExercises extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername= this.onChangeUsername.bind(this);
        this.onChangeDescription= this.onChangeDescription.bind(this);
        this.onChangeFirst= this.onChangeFirst.bind(this);
        this.onChangeLast= this.onChangeLast.bind(this);
        this.onChangeGender= this.onChangeGender.bind(this);
        this.onChangeAge= this.onChangeAge.bind(this);
        this.onChangeCity= this.onChangeCity.bind(this);
        this.onChangeStateRegion= this.onChangeStateRegion.bind(this);
        this.onChangeCountry= this.onChangeCountry.bind(this);
        this.onChangeYourName= this.onChangeYourName.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangeCondition= this.onChangeCondition.bind(this);
        this.onChangeDate= this.onChangeDate.bind(this);



        this.onSubmit= this.onSubmit.bind(this);



        this.state = {
            username: "",
            description: "",
         
         
            users: [],
            
            first: '',
            last: '',
            gender: '',
            age: '',
            city: '',
            region: '',
            country: '',
            name: '',
            email: '',
            condition: '',
            yourname: '',
            date: new Date(),
        }
    }
    
        componentDidMount() {
            axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username), 
                        username: response.data[0].username
                    })
                }
            })
        }
        
        onChangeUsername = (e) => {
            this.setState({
                username: e.target.value
            });
            }

        onChangeDescription = (e) => {
            this.setState({
                description: e.target.value
            });
            }

      
        
        onChangeFirst = (e) => {
            this.setState({
                first: e.target.value
            });
            }
        
        onChangeLast = (e) => {
            this.setState({
                last: e.target.value
            });
            }
        onChangeGender = (e) => {
            this.setState({
                gender: e.target.value
            });
            }
            onChangeAge = (e) => {
                this.setState({
                    age: e.target.value
                });
                }
            
            onChangeCity = (e) => {
                this.setState({
                    city: e.target.value
                });
                }
            onChangeStateRegion = (e) => {
                this.setState({
                    stateregion: e.target.value
                });
                }
                onChangeCountry = (e) => {
                    this.setState({
                        country: e.target.value
                    });
                    }
                
                onChangeYourName = (e) => {
                    this.setState({
                        yourname: e.target.value
                    });
                    }
                onChangeEmail = (e) => {
                    this.setState({
                        email: e.target.value
                    });
                    }
                    onChangeCondition = (e) => {
                        this.setState({
                            condition: e.target.value
                        });
                        }
                    onChangeDate = (date) => {
                        this.setState({
                            date: date
                        });
                    }
                    
                    
                    

        onSubmit = (e) => {
            

            const exercise = {
                username: this.state.username,
                description: this.state.description,
                
                first: this.state.first,
                last: this.state.last,
                gender: this.state.gender,
                age: this.state.age,
                city: this.state.city,
                stateregion: this.state.stateregion,
                country: this.state.country,
                yourname: this.state.yourname,
                email: this.state.email,
                condition: this.state.condition,
                date: this.state.date,
                
            }
            e.preventDefault();

            console.log(exercise);

            axios.post('http://localhost:5000/exercises/add', exercise)
                .then(res => console.log(res.data));
            
            this.setState({
                    username: "",
                    description: "",
                    
                 
                    users: [],
                    
                    first: '',
                    last: '',
                    gender: '',
                    age: '',
                    city: '',
                    stateregion: '',
                    country: '',
                    name: '',
                    email: '',
                    condition: '',
                    yourname: '',
                    
                }
            );
            
        }
  
    
    render() {
        return (
            <div className="container">
            <h3>HEALING REQUEST</h3>
            <h4>About the Person in Need of 
                Healing</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group col s12 m6">
                            <label>Username: </label>
                                <select ref="userInput"
                                    required
                                    className="form-control"
                                    value={this.props.username}
                                    onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map(function(user){
                                    return <option 
                                    key={user}
                                    value={user}>{user}
                                        </option>;
                                    })
                                }
                                </select>
                        </div>
                        
                        

                    <div className="row">
                        <div className="form-group">
                            <label>Picture of the Person to Heal</label>
                            
                        </div>  
        </div>
                        
                        <div className="row">
                        <div className="col s12 m6">
                        <div className="form-group">
            
            
            <label>
              First Name
                <input
                  type="text" 
                  className="validate" 
                  value={this.state.first.value} 
                  onChange={this.onChangeFirst}
                  name="first"
                  placeholder="First Name"
                />
            </label>
        </div>
        </div>
        <div className="col s12 m6">
        <div className="form-group">
         
            <label>
              Last Name
                <input 
                type="text" 
                className="validate" 
                value={this.state.last.value} 
                onChange={this.onChangeLast} 
                name="last" 
                />
            </label>
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col s12 m6">
        <div className="form-group">
            <label>
              Age
                <input 
                type="text" 
                className="validate" 
                value={this.state.age.value} 
                onChange={this.onChangeAge} 
                name="age" 
                />
            </label>
        </div>  
        </div>
        <div className="col s12 m6">
        <div className="form-group">  
            <label>
              Gender
                <input 
                type="text" 
                className="validate" 
                value={this.state.gender.value} 
                onChange={this.onChangeGender}
                name="gender" 
                />
            </label>
        </div>
        </div>
        </div>
      <h4>Where They Live</h4>
      <div className="row">
      <div className="col s12 m6">
        <div className="form-group">
            <label>
              City
              <input 
              type="text" 
              value={this.state.city.value} 
              onChange={this.onChangeCity} 
              name="city" 
              />
            </label>
        </div>
        </div>
        <div className="col s12 m6">
        <div className="form-group">
            <label>
              State or Region
              <input 
              type="text" 
              
              onChange={this.onChangeStateRegion} 
              name="stateregion" 
              />
            </label>
        </div>
        </div>
        <div className="col s12 m6">
        <div className="form-group">
            <label>
              Country
              <input 
              type="text" 
              value={this.state.country.value} 
              onChange={this.onChangeCountry} 
              name="country" 
              />
            </label>
        </div>
        </div>
        </div>
    <h4>Conditions Requested To Heal</h4>
    <div className="col s12 m12">
        <div className="form-group">
            <label>
              Conditions
            </label>
    
            <TextareaAutosize 
            type="text" 
            value={this.state.condition.value} 
            onChange={this.onChangeCondition} 
            name="yourName">
            </TextareaAutosize>
        </div>
        </div>
    <h4>Healing Requester Contact</h4>
    <div className="row">
    <div className="col s12 m6">
        <div className="form-group">
            <label>
              Your Name
              <input 
              type="text" 
              value={this.state.yourname.value} 
              onChange={this.onChangeYourName} 
              name="yourname" 
              />
            </label>
        </div>
        </div>
        <div className="col s12 m6">
        <div className="form-group">
            <label>
              Your Email
              <input 
              type="email" 
              value={this.state.email.value} 
              onChange={this.onChangeEmail} 
              name="email" 
              />
            </label>
        </div>          
        </div>
        
        </div>
        <div className="form-group col s12 m12">
                            <label>Description Of How You Know This Person: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.description.value}
                                    onChange={this.onChangeDescription}
                                    />
                        </div>
                        <div>
                            <input 
                                type="submit" 
                                value="Submit" 
                                className="btn btn-primary"
                                />
                        </div>
                    </form>
                    <div>
                        <p></p>
                    </div>
            </div>
        )}
    }


export default CreateExercises;