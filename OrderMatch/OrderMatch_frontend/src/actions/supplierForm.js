import axios from 'axios';
import {
    SUPPLIER_FORM_LIST,
    SUPPLIER_FORM_LIST_FAILURE,
    SUPPLIER_FORM_LIST_SUCCESS,
    SUPPLIER_FORM_COLUMN_STATUS,
    SUPPLIER_FORM_LIST_UPDATE,
    SUPPLIER_FORM_LIST_UPDATE_FAILURE,
    SUPPLIER_FORM_LIST_UPDATE_SUCCESS,
    SUPPLIER_FORM_LIST_COLUMN_INSERT,
    SUPPLIER_FORM_LIST_COLUMN_INSERT_FAILURE,
    SUPPLIER_FORM_LIST_COLUMN_INSERT_SUCCESS,
    SUPPLIER_FORM_LIST_CREATE,
    SUPPLIER_FORM_LIST_CREATE_SUCCESS,
    SUPPLIER_FORM_LIST_CREATE_FAILURE,
    SUPPLIER_FORM_LIST_DELETE,
    SUPPLIER_FORM_LIST_DELETE_FAILURE,
    SUPPLIER_FORM_LIST_DELETE_SUCCESS
} from './ActionTypes';

const enhanceAccessToken = () => {
    if(!localStorage.accessToken) return
    axios.defaults.headers.common['X-AUTH-TOKEN'] = localStorage.accessToken;
    axios.defaults.headers.common['USERNAME'] = localStorage.username;
} 
enhanceAccessToken(); // 새로고침시 토큰 재설정

/* 공급사 주문서 양식 삭제 */
export function supplierFormDeleteRequest(deleteArray) {
    return (dispatch) => {
        dispatch(supplierFormDelete())

        return axios.post("http://localhost:8080/api/supplierForm/delete", deleteArray)
        .then(response => {
            var result = response && response.data;

            if(result.success == true) {
                dispatch(supplierFormDeleteSuccess(result))
            } else {
                dispatch(supplierformDeleteFailure())
            }
        })
    }
}

export function supplierFormDelete() {
    return {
        type: SUPPLIER_FORM_LIST_DELETE
    }
}

export function supplierFormDeleteSuccess(result) {
    return {
        type: SUPPLIER_FORM_LIST_DELETE_SUCCESS,
        result
    }
}

export function supplierformDeleteFailure() {
    return {
        type: SUPPLIER_FORM_LIST_DELETE_FAILURE
    }
}

/* 공급사 주문서 양식 추가 */
export function supplierFormCreateRequest(supplierForm) {
    return (dispatch) => {
        dispatch(supplierFormCreate())

        return axios.post("http://localhost:8080/api/supplierForm/insert", supplierForm)
        .then(response => {
            var result = response && response.data;

            if(result.success == true) {
                dispatch(supplierFormCreateSuccess(result))
            } else {
                dispatch(supplierformCreateFailure())
            }
        })
    }
}

export function supplierFormCreate() {
    return {
        type: SUPPLIER_FORM_LIST_CREATE
    }
}

export function supplierFormCreateSuccess(result) {
    return {
        type: SUPPLIER_FORM_LIST_CREATE_SUCCESS,
        result
    }
}

export function supplierformCreateFailure() {
    return {
        type: SUPPLIER_FORM_LIST_CREATE_FAILURE
    }
}


/* 공급사 주문서 양식 헤더 리스트 추가 */
export function supplierFormColumnInsertRequest(columnArray, form_id) {
    return (dispatch) => {
        dispatch(supplierFormColumnInsert())

        axios.defaults.headers.common['form_id'] = form_id;
        return axios.post("http://localhost:8080/api/supplierForm/column/insert", columnArray)
        .then(response => {
            var result = response && response.data;

            if(result.success == true) {
                dispatch(supplierFormColumnInsertSuccess(result))
            } else {
                dispatch(supplierFormColumnInsertFailure())
            }
        })
    }
}

export function supplierFormColumnInsert() {
    return {
        type: SUPPLIER_FORM_LIST_COLUMN_INSERT
    }
}

export function supplierFormColumnInsertSuccess(result) {
    return {
        type: SUPPLIER_FORM_LIST_COLUMN_INSERT_SUCCESS,
        result
    }
}

export function supplierFormColumnInsertFailure() {
    return {
        type: SUPPLIER_FORM_LIST_COLUMN_INSERT_FAILURE
    }
}

/* 공급사 주문서 양식 리스트 수정 */
export function supplierFormUpdateRequest(supplierForm) {
    return (dispatch) => {
        dispatch(supplierFormUpdate())

        return axios.post("http://localhost:8080/api/supplierForm/update", supplierForm)
        .then(response => {
            var result = response && response.data;

            if(result.success == true) {
                dispatch(supplierFormUpdateSuccess(result))
            } else {
                dispatch(supplierformUpdateFailure())
            }
        })
    }
}

export function supplierFormUpdate() {
    return {
        type: SUPPLIER_FORM_LIST_UPDATE
    }
}

export function supplierFormUpdateSuccess(result) {
    return {
        type: SUPPLIER_FORM_LIST_UPDATE_SUCCESS,
        result
    }
}

export function supplierformUpdateFailure() {
    return {
        type: SUPPLIER_FORM_LIST_UPDATE_FAILURE
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

            result.list.sort(function(a, b) { // form_id 로 오름차순 정렬
                return a.form_id > b.form_id ? -1 : a.from_id < b.form_id ? 1 : 0;
            })

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