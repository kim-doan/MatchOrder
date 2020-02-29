import React, { Component } from "react";
import { connect } from 'react-redux';
import {loginRequest} from 'actions/authentication'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { Authentication } from 'components/Authentication';

import axios from 'axios';

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

//const useStyles = makeStyles(styles);

class LoginPage extends Component {
    handleLogin = (id, pw) => {
      return this.props.loginRequest(id, pw).then(
          () => {
              if(this.props.status == "SUCCESS") {
                  //세션 데이터 생성
                  let loginData = {
                      isLoggedIn : true,
                      username: id
                  };
                  
                  //axios 기본 요청 해더에 X-AUTH-TOKEN 이라는 이름으로 로그인 토큰정보 저장
                  axios.defaults.headers.common['X-AUTH-TOKEN'] = this.props.token;
                  axios.defaults.headers.common['USERNAME'] = this.props.username;
                  //클라이언트의 LocalStorage에 token 정보 저장
                  localStorage.accessToken = this.props.token;
                  //클라이언트의 LocalStorage에 아이디 정보 저장
                  localStorage.username = this.props.username;

                  document.cookie = 'key=' + btoa(JSON.stringify(loginData)) + ";path=/";

                  alert(id + "님 환영합니다.");
                  this.props.history.push('/');
                  return true;
              } else {
                  alert("로그인 정보를 확인해주세요.");
                  return false;
              }
          }
      )
  }

  render() {
    const { classes } = this.props;
    return (
          <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={6}>
          <Card>
          <Authentication mode={true} onLogin={this.handleLogin}/>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      status: state.authentication.login.status,
      token: state.authentication.status.token,
      username: state.authentication.status.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      loginRequest: (id, pw) => {
          return dispatch(loginRequest(id, pw));
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginPage));