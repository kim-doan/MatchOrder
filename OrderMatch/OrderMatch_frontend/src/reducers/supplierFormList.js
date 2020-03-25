import * as types from "actions/ActionTypes";
import { actions } from "react-table";

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
  update: {
    state: "INIT",
    msg: ""
  },
  create: {
    state: "INIT",
    msg: ""
  },
  delete: {
    state: "INIT",
    msg: ""
  },
  columnInsert: {
    state: "INIT",
    msg: "",
    form_id: 0
  },
  column: []
};

export default function supplierFormList(state = initialState, action) {
  switch (action.type) {
    case types.SUPPLIER_FORM_LIST_DELETE:
      return {
        ...state,
        delete: {
          state: "WAITING"
        }
      }
    case types.SUPPLIER_FORM_LIST_DELETE_SUCCESS:
      return {
        ...state,
        delete: {
          state: "SUCCESS",
          msg: action.result.msg
        }
      }
    case types.SUPPLIER_FORM_LIST_DELETE_FAILURE:
      return {
        ...state,
        delete: {
          state: "FAILURE"
        }
      }
    case types.SUPPLIER_FORM_LIST_CREATE:
      return {
        ...state,
        create: {
          state: "WAITING"
        }
      }
    case types.SUPPLIER_FORM_LIST_CREATE_SUCCESS:
      return {
        ...state,
        create: {
          state: "SUCCESS",
          msg: action.result.msg,
          form_id: action.result.id
        }
      }
    case types.SUPPLIER_FORM_LIST_CREATE_FAILURE:
      return {
        ...state,
        create: {
          state: "FAILURE"
        }
      }
    case types.SUPPLIER_FORM_LIST_COLUMN_INSERT:
      return {
        ...state,
        columnInsert: {
          state: "WAITING"
        }
      }
    case types.SUPPLIER_FORM_LIST_COLUMN_INSERT_SUCCESS:
      return {
        ...state,
        columnInsert: {
          state: "SUCCESS",
          msg: action.result
        }
      }
    case types.SUPPLIER_FORM_LIST_COLUMN_INSERT_FAILURE:
      return {
        ...state,
        columnInsert: {
          state: "FAILURE"
        }
      }
    case types.SUPPLIER_FORM_LIST_UPDATE:
      return {
        ...state,
        update: {
          state: "WAITING"
        }
      }
    case types.SUPPLIER_FORM_LIST_UPDATE_SUCCESS:
      return {
        ...state,
        update: {
          state: "SUCCESS",
          msg: action.result.msg
        }
      }
    case types.SUPPLIER_FORM_LIST_UPDATE_FAILURE:
      return {
        ...state,
        update: {
          state: "FAILURE"
        }
      }
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
          state: "WAITING"
        }
      };
    case types.SUPPLIER_FORM_LIST_SUCCESS:
      return {
        ...state,
        form: {
          state: "SUCCESS"
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
          state: "FAILURE"
        }
      };
    default:
      return state;
  }
}
