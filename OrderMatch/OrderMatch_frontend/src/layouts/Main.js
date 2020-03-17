import React, { Component } from 'react';
import AdminPage from 'layouts/Admin';
import { connect } from "react-redux";
import { getStatusRequest} from 'actions/authentication';

import axios from 'axios';

class Main extends Component {
    componentDidMount() {
        const enhanceAccessToken = () => {
            if(!localStorage.accessToken) return
            axios.defaults.headers.common['X-AUTH-TOKEN'] = localStorage.accessToken;
            axios.defaults.headers.common['USERNAME'] = localStorage.username;
          } 
          enhanceAccessToken(); // 새로고침시 토큰 재설정
        //get cookie by name
        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if(parts.length == 2) {
            return parts.pop().split(";").shift();
            }
        }
        
        function removeCookie() {
            loginData = {
              isLoggedIn: false,
              username: ''
            };
      
            document.cookie='key= ' + btoa(JSON.stringify(loginData)) + ';path=/';
          }

        let loginData = getCookie('key');

        // 쿠키 데이터 null 체크
        if(typeof loginData === "undefined") { 
            this.props.history.push('/auth/login-page');
            return;
        }
    
        //쿠키 데이터 base64로 디코딩
        loginData = JSON.parse(atob(loginData));
    
        // 로그인 되어있는지 확인
        if(!loginData.isLoggedIn) {
            this.props.history.push('/auth/login-page');
            return;
        }
        /* 로그인체크 전부완료 (로그인을 한적 없지 않거나, 로그아웃하지 않거나/세션에 문제가 없을 경우) */
        this.props.getStatusRequest().then(
            () => {
            if(!this.props.status.valid) {
                //세션 로그아웃 상태
                removeCookie();
    
                alert("세션이 만료되어 종료됩니다. 다시 로그인해주세요.")
                this.props.history.push('/auth/login-page');
            }
            }
        )          
    }

    render() {
        return (
            <AdminPage></AdminPage>
        )
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
      },
      logoutRequest: () => {
        return dispatch(logoutRequest());
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Main);