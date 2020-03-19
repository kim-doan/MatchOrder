import * as types from "actions/ActionTypes";

const initialState = {
  form: {
    state: "INIT"
  },
  info: {
    state: "INIT"
  },
  status: {
    list: [],
    columnList: []
  },
  column: []
};

export default function supplierFormList(state = initialState, action) {
  switch (action.type) {
    /* SUPPLIER_FORM_COLUMN_STATUS */
    case types.SUPPLIER_FORM_COLUMN_STATUS:
      return {
        ...state,
        column: (state.column = action.column.slice())
      };
    /* SUPPLIER_FORM_LIST */
    case types.SUPPLIER_FORM_LIST:
      return {
        ...state,
        form: {
          status: "WAITING"
        }
      };
    case types.SUPPLIER_FORM_LIST_SUCCESS:
      return {
        ...state,
        form: {
          status: "SUCCESS"
        },
        status: {
          ...state.status,
          list: (state.status.list = action.supplierForm.slice())
        }
      };
    case types.SUPPLIER_FORM_LIST_FAILURE:
      return {
        ...state,
        form: {
          status: "FAILURE"
        }
      };
    default:
      return state;
  }
}
