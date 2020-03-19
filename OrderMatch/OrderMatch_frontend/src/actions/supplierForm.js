import axios from 'axios';
import {
    SUPPLIER_FORM_LIST,
    SUPPLIER_FORM_LIST_FAILURE,
    SUPPLIER_FORM_LIST_SUCCESS,
    SUPPLIER_FORM_COLUMN_STATUS
} from './ActionTypes';

const enhanceAccessToken = () => {
    if(!localStorage.accessToken) return
    axios.defaults.headers.common['X-AUTH-TOKEN'] = localStorage.accessToken;
    axios.defaults.headers.common['USERNAME'] = localStorage.username;
} 
enhanceAccessToken(); // 새로고침시 토큰 재설정

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