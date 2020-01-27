/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "routes/dashboard.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import { connect } from "react-redux";
import { getStatusRequest } from 'actions/authentication';
import axios from "axios";

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
    const enhanceAccessToken = () => {
      if(!localStorage.accessToken) return
      axios.defaults.headers.common['X-AUTH-TOKEN'] = localStorage.accessToken;
      axios.defaults.headers.common['USERNAME'] = localStorage.username;
    } 
    enhanceAccessToken(); // 새로고침시 토큰 재설정

    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);

    //get cookie by name
    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if(parts.length == 2) {
        return parts.pop().split(";").shift();
      }
    }

    let loginData = getCookie('key');

    // 쿠키 데이터 null 체크
    if(typeof loginData === "undefined") return;

    //쿠키 데이터 base64로 디코딩
    loginData = JSON.parse(atob(loginData));

    // 로그인 되어있는지 확인
    if(!loginData.isLoggedIn) return;

    /* 로그인체크 전부완료 (로그인을 한적 없지 않거나, 로그아웃하지 않거나/세션에 문제가 없을 경우) */
    this.props.getStatusRequest().then(
      () => {
        if(!this.props.status.valid) {
          //세션 로그아웃 상태
          loginData = {
            isLoggedIn: false,
            username: ''
          };

          document.cookie='key= ' + btoa(JSON.stringify(loginData));

          alert("세션이 만료되어 종료됩니다. 다시 로그인해주세요.")
        }
      }
    )
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }

  render() {
    const { classes, ...rest } = this.props;
    let re = /(login|register)/; // login or register 정규 표현식
    let isAuth = re.test(this.props.location.pathname); // 주소가 만약 login이나 register일 경우 isAuth는 true / 아닐경우 false
      return (
        <div className={classes.wrapper}>
          {isAuth ? undefined :
          <Sidebar
            routes={dashboardRoutes}
            logoText={"Order Match"}
            logo={logo}
            image={image}
            handleDrawerToggle={this.handleDrawerToggle}
            open={this.state.mobileOpen}
            color="blue"
            {...rest}
          />
          }
          <div className={classes.mainPanel} ref="mainPanel">
          {isAuth ? undefined :
            <Header
              routes={dashboardRoutes}
              handleDrawerToggle={this.handleDrawerToggle}
              {...rest}
            />
          }
            {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
            {this.getRoute() ? (
              <div className={classes.content}>
                <div className={classes.container}>{switchRoutes}</div>
              </div>
            ) : (
              <div className={classes.map}>{switchRoutes}</div>
            )}
            {this.getRoute() ? <Footer /> : null}
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.status
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStatusRequest: () => {
      return dispatch(getStatusRequest());
    }
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default withStyles(dashboardStyle)(App);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dashboardStyle)(App));
