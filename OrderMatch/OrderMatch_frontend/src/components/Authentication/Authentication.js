import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Signin from './Signin';
import CheckOut2 from './CheckOut2';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";

import CheckStep1 from "./CheckStep1.js";
import CheckStep2 from "./CheckStep2.js";
import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
import withStyles from "@material-ui/core/styles/withStyles";


class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""

        }
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
                if (!result) {
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
                if (!success) {
                    this.setState({
                        password: ''
                    });
                }
            }
        );
    }

    handleKeyPress = (e) => {
        if (e.charCode == 13) {
            if (this.props.mode) {
                this.handleLogin();
            } else {
                this.handleRegister();
            }
        }
    }

    render() {
        const { classes } = this.props;
        const inputBoxes = (
            <div>
                <div className="input-field col s12 username">
                    <label>Username</label>
                    <input
                        name="username"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.username} />
                </div>
                <div className="input-field col s12">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.password}
                        onKeyPress={this.handleKeyPress} />
                </div>
            </div>
        );

        const loginView = (
            <div>
                <Signin onLogin={this.props.onLogin} />
            </div>
        );

        const registerView = (
            <div className="card-content">
                <div className="row">
                    {/* <CheckOut /> */}
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12}>
                            <CheckOut2
                                validate
                                steps={[
                                    { stepName: "이용약관", stepComponent: CheckStep1, stepId: "about" },
                                    { stepName: "회원정보", stepComponent: CheckStep2, stepId: "account" }
                                    // { stepName: "Address", stepComponent: CheckStep3, stepId: "address" }
                                ]}
                                title="회원가입"
                                subtitle="가입하든가 말든가"
                            // finishButtonClick={() => this.setState({ alert: true })}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
        return (
            <div className="container auth">
                <div className="card">
                    {this.props.mode ? loginView : registerView}
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

export default withStyles(styles)(Authentication);
