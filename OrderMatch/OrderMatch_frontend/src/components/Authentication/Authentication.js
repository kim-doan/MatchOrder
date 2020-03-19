import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Signin from './Signin';
import CheckOut2 from './CheckOut2';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import SweetAlert from "react-bootstrap-sweetalert";
import CheckStep1 from "./CheckStep1.js";
import CheckStep2 from "./CheckStep2.js";
import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
import withStyles from "@material-ui/core/styles/withStyles";
import { blackColor } from 'assets/jss/material-dashboard-pro-react';

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            alert: false
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
    hideAlert = () => {
        this.setState({ alert: false })
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
                                    { stepName: "About", stepComponent: CheckStep1, stepId: "about" },
                                    { stepName: "Account", stepComponent: CheckStep2, stepId: "account" }
                                    // { stepName: "Address", stepComponent: CheckStep3, stepId: "address" }
                                ]}
                                title="Build Your Profile"
                                subtitle="This information will let us know more about you."
                                finishButtonClick={() => this.setState({ alert: true })}
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
                <SweetAlert
                    success
                    show={this.state.alert}
                    style={{ display: "block", marginTop: "-100px", color: blackColor }}
                    title="Good job!"
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnCssClass={classes.button + " " + classes.success}
                >
                    You clicked the button!
                    </SweetAlert>
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