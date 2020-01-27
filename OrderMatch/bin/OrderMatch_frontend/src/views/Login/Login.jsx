import React, { Component } from 'react';
import { Authentication } from 'components/Authentication';
import { connect } from 'react-redux';
import {loginRequest} from 'actions/authentication'
import axios from 'axios';

class Login extends Component {

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

                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));

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
        return (
            <div>
                <Authentication mode={true} onLogin={this.handleLogin}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
