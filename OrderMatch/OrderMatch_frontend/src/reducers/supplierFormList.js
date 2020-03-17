import * as types from 'actions/ActionTypes';
 
const initialState = {
    form: {
        state: 'INIT'
    },
    status: {
        list : []
    }
};
 
export default function supplierFormList(state = initialState, action) {
  switch(action.type) {
    /* LOGIN */
    case types.SUPPLIER_FORM_LIST:
      return {
        ...state,
        form: {
          status: 'WAITING'
        },
      }
    case types.SUPPLIER_FORM_LIST_SUCCESS:
      return {
        ...state,
        form: {
          status: 'SUCCESS',
        },
        status: {
          ...state.status,
          list: state.status.list = action.supplierForm.slice()
        }
      }
    case types.SUPPLIER_FORM_LIST_FAILURE:
      return {
        ...state,
        form: {
          status: 'FAILURE'
        }
      }
    default:
      return state;
  }
};
