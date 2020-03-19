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
    AUTH_LOGOUT,
    SUPPLIER_FORM_LIST,
    SUPPLIER_FORM_LIST_FAILURE,
    SUPPLIER_FORM_LIST_SUCCESS,
    SUPPLIER_FORM_COLUMN_STATUS,
    SUPPLIER_FORM_COLUMN_INFO,
    SUPPLIER_FORM_COLUMN_INFO_SUCCESS,
    SUPPLIER_FORM_COLUMN_INFO_FAILURE
} from './ActionTypes';

const enhanceAccessToken = () => {
    if(!localStorage.accessToken) return
    axios.defaults.headers.common['X-AUTH-TOKEN'] = localStorage.accessToken;
    axios.defaults.headers.common['USERNAME'] = localStorage.username;
} 
enhanceAccessToken(); // 새로고침시 토큰 재설정

/*공급사 주문서 엑셀양식 컬럼정보 (기준정보) 가져오기 */
export function supplierFormColumnInfoRequest() {
    return (dispatch) => {
        dispatch(supplierFormColumnInfo())

        return axios.get("http://localhost:8080/api/master/supplierColumnInfo")
        .then(response => {
            var result = response && response.data;

            if(result.success == true) {
                dispatch(supplierFormColumnInfoSuccess(result.list))
            } else {
                dispatch(supplierFormColumnInfoFailure())
            }
        })
    }
}

export function supplierFormColumnInfo() {
    return {
        type: SUPPLIER_FORM_COLUMN_INFO,
    }
}

export function supplierFormColumnInfoSuccess(columnInfo) {
    return {
        type: SUPPLIER_FORM_COLUMN_INFO_SUCCESS,
        columnInfo
    }
}

export function supplierFormColumnInfoFailure() {
    return {
        type: SUPPLIER_FORM_COLUMN_INFO_FAILURE
    }
}

/*현재 리스트박스에 있는 상태값*/
export function supplierFormColumnStatus(column) {
    return (dispatch) => {
        return dispatch(supplierFormColumn(column))
    }
}

export function supplierFormColumn(column) {
    return {
        type: SUPPLIER_FORM_COLUMN_STATUS,
        column
    }
}

/* 공급사 주문서 양식 리스트 */
export function supplierFormRequest() {
    return (dispatch) => {
        dispatch(supplierForm())

        return axios.post("http://localhost:8080/api/supplierForm", {})
        .then(response => {
            var result = response && response.data;
            
            if(result.success == true) {
                dispatch(supplierFormSuccess(result.list))
            } else {
                dispatch(supplierFormFailure())
            }
        })
    }
}

export function supplierForm() {
    return {
        type: SUPPLIER_FORM_LIST
    };
}

export function supplierFormSuccess(supplierForm) {
    return {
        type: SUPPLIER_FORM_LIST_SUCCESS,
        supplierForm
    }
}

export function supplierFormFailure() {
    return {
        type: SUPPLIER_FORM_LIST_FAILURE
    }
}

/* LOGOUT */
export function logoutRequest() {
    return (dispatch) => {
        dispatch(logout());
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        dispatch(getStatusFailure()); // 상태 redux 전부 초기화
    
        document.cookie='key= ' + btoa(JSON.stringify("")) +";path=/";
        window.location.reload();
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
                dispatch(getStatusSuccess(response.data.data, response.data.data.company)); // 유저데이터 찾아서 redux에 넣기
            } else { // 토큰이 만료되었을경우
                localStorage.removeItem("accessToken");
                localStorage.removeItem("username");
                dispatch(getStatusFailure()); // 상태 redux 전부 초기화
            }
        })
        .catch(response => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("username");
            dispatch(getStatusFailure()); // 상태 redux 전부 초기화
        })
    }
}

export function getStatus() {
    return {
        type: AUTH_GET_STATUS
    };
}

export function getStatusSuccess(userInfo, companyInfo) {
    return {
        type: AUTH_GET_STATUS_SUCCESS,
        userInfo,
        companyInfo
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