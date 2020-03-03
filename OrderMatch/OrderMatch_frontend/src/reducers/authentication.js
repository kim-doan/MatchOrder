import * as types from 'actions/ActionTypes';
 
const initialState = {
    login: {
        status: 'INIT',
    },
    register: {
        status: 'INIT',
        error: -1
    },
    status: {
        valid: false,
        isLoggedIn: false,
        currentUser: '',
        user: {},
        company: {},
        token: ''
    }
};
 
export default function authentication(state = initialState, action) {
  switch(action.type) {
    /* LOGOUT */
    case types.AUTH_LOGOUT:
        return {
          ...state,
          status: {
            ...state.status,
            isLoggedIn: false,
            currentUser: ''
          }
        }
    /* CHECK SESSION */
    case types.AUTH_GET_STATUS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoggedIn: true
        }
      }
    case types.AUTH_GET_STATUS_SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          valid: true,
          currentUser: action.userInfo.username,
          user: Object.assign({}, state.status.user, action.userInfo),
          company: Object.assign({}, state.status.company, action.companyInfo)
        }
      }
    case types.AUTH_GET_STATUS_FAILURE:
      return {
        ...state,
        status: {
          ...status.status,
          valid: false,
          isLoggedIn: false,
          user: {},
          token: ''
        }
      }
    /* REGISTER */
    case types.AUTH_REGISTER:
      return {
        ...state,
        register: {
          status: 'WAITING',
          error: -1
        }
      }
    case types.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          status: 'SUCCESS'
        }
      }
    case types.AUTH_REGISTER_FAILURE:
      return {
        ...state,
        register:{
          status: 'FAILURE',
          error: action.error
        }
      }
    /* LOGIN */
    case types.AUTH_LOGIN:
      return {
        ...state,
        login: {
          status: 'WAITING'
        },
      }
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          status: 'SUCCESS',
        },
        status: {
          ...state.status,
          isLoggedIn: true,
          currentUser: action.username,
          token : action.token
        }
      }
    case types.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        login: {
          status: 'FAILURE'
        }
      }
    default:
      return state;
  }
};
