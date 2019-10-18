import React, { Component } from 'react';
import axios from 'axios';


class CreateUsers extends Component {
    constructor(props) {
        super(props);

        this.onChange= this.onChange.bind(this);
        
        this.onSubmit= this.onSubmit.bind(this);

        this.state = {
            username: ""
        }
    }
    
        onChange = (e) => {
            this.setState({
                username: e.target.value
            });
        }

        onSubmit = (e) => {
              const user = {
                  username: this.state.username
              }
            e.preventDefault();
            
            console.log(user);

            axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
              
            this.setState({
                username: ''
            });
            
        }
    
    render() {
        return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.onChange} 
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
        </div>
    )}
}

export default CreateUsers;