import axios from 'axios';
import {
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_GET_STATUS,
    AUTH_GET_STATUS_SUCCESS,
    AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT
} from './ActionTypes';

/* LOGOUT */
export function logoutRequest() {
    return (dispatch) => {
        dispatch(logout());
    };
}
 
export function logout() {
    return {
        type: AUTH_LOGOUT
    };
}

/* GET STATUS */
// 토큰 만료되었는지 확인하는 메소드
export function getStatusRequest() {
    return (dispatch) => {
        dispatch(getStatus());
        //토큰 만료 확인
        return axios.get('http://localhost:8080/api/user/validToken')
        .then(response => {
            var result = response && response.data;
            if(result.success == true) { // 토큰이 만료되지 않았을경우
                dispatch(getStatusSuccess(response.data)); // 유저데이터 찾아서 redux에 넣기
            } else { // 토큰이 만료되었을경우
                localStorage.removeItem("accessToken");
                localStorage.removeItem("username");
                dispatch(getStatusFailure()); // 상태 redux 전부 초기화
            }
        })
    }
}

export function getStatus() {
    return {
        type: AUTH_GET_STATUS
    };
}

export function getStatusSuccess(userInfo) {
    return {
        type: AUTH_GET_STATUS_SUCCESS,
        userInfo
    };
}

export function getStatusFailure() {
    return {
        type: AUTH_GET_STATUS_FAILURE
    };
}
/* LOGIN */
export function loginRequest(username, password) {
    return (dispatch) => {
        dispatch(login());

        //API
        return axios.post('http://localhost:8080/api/user/login', {username, password})
        .then(response => {
            var result = response && response.data;

            if(result.success == true) {
                dispatch(loginSuccess(username, result.token));
            } else {
                dispatch(loginFailure());
            }
        })
        .catch(response => {
            //logging 처리 필요
            console.log(response);
        });
    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(username, token) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        username,
        token
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

/* REGISTER */
export function registerRequest(username, password) {
    return (dispatch) => {
        // Inform Register API is starting
        dispatch(register());
 
        return axios.post('http://localhost:8080/api/user/register', { username, password })
        .then(response => {
            var result = response && response.data;
            if(result.success == true) { // 회원가입 성공
                dispatch(registerSuccess());
            } else { // 회원가입 실패
                dispatch(registerFailure(result.code)); // 실패 코드
            }
        })
        .catch(response => {
            //logging 처리 필요
            console.log(response);
        });
    };
}
 
export function register() {
    return {
        type: AUTH_REGISTER
    };
}
 
export function registerSuccess() {
    return {
        type: AUTH_REGISTER_SUCCESS,
    };
}
 
export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };
}