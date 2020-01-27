import React, { Component } from 'react';
import { Authentication } from 'components/Authentication';
import { connect } from 'react-redux';
import { registerRequest } from 'actions/authentication';

class Register extends Component {

    handleRegister = (id, pw) => {
        return this.props.registerRequest(id, pw)
        .then(() => {
            if(this.props.status === "SUCCESS") {
                alert("회원가입 성공");
                this.props.history.push('/login');
                return true;
            } else {
                var errorIndex = 0;
                switch(this.props.errorCode) {
                    case -1005: // 중복된 아이디 일경우 서버에서 반환되는 코드
                        errorIndex = 0;
                }
                let errorMessage = [
                    '중복된 아이디입니다.',
                    'Password is too short',
                    'Username already exists'
                ];

                alert(errorMessage[errorIndex]);
                return false;
            }
        })
    }

    render() {
        return (
            <div>
                <Authentication mode={false} onRegister={this.handleRegister}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.register.status,
        errorCode: state.authentication.register.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerRequest: (id, pw) => {
            return dispatch(registerRequest(id, pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);