import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CheckOut from './CheckOut';
import Signin from './Signin';

class Authentication extends Component {
    state = {
      username:"",
      password:""
    }
 
    handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
 
    handleRegister = () => {
        let id = this.state.username;
        let pw = this.state.password;
 
        this.props.onRegister(id, pw).then(
            (result) => {
                if(!result) {
                    this.setState({
                        username: '',
                        password: ''
                    });
                }
            }
        );
    }
    
    handleLogin = () => {
        let id = this.state.username;
        let pw = this.state.password;
 
        this.props.onLogin(id, pw).then(
            (success) => {
                if(!success) {
                    this.setState({
                        password: ''
                    });
                }
            }
        );
    }

    handleKeyPress = (e) => {
        if(e.charCode==13) {
            if(this.props.mode) {
                this.handleLogin();
            } else {
                this.handleRegister();
            }
        }
    }

    render() {
        const inputBoxes = (
            <div>
                <div className="input-field col s12 username">
                    <label>Username</label>
                    <input
                    name="username"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}
                    value={this.state.username}/>
                </div>
                <div className="input-field col s12">
                    <label>Password</label>
                    <input
                    name="password"
                    type="password"
                    className="validate"
                    onChange={this.handleChange}
                    value={this.state.password}
                    onKeyPress={this.handleKeyPress}/>
                </div>
            </div>
        );
 
        const loginView = (
            <div>
                <Signin onLogin={this.props.onLogin}/>
            </div>
        );
 
        const registerView = (
            <div className="card-content">
                <div className="row">
                    <CheckOut/>
                </div>
            </div>
        );
        return (
          <div className="container auth">
              <div className="card">
                  {this.props.mode ? loginView : registerView }
              </div>
          </div>
        );
    }
}
 
Authentication.propTypes = {
    mode: PropTypes.bool,
    onRegister: PropTypes.func,
    onLogin: PropTypes.func
};
 
Authentication.defaultProps = {
    mode: true,
    onRegister: (id, pw) => { console.error("register function is not defined"); },
    onLogin: (id, pw) => { console.error("login function not defined"); }
};
 
export default Authentication;