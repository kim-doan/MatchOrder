import authentication from './authentication';
import supplierFormList from './supplierFormList'
import { combineReducers } from 'redux';
 
export default combineReducers({
    authentication,
    supplierFormList
});