import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducers from './SelectionReducers'
export default combineReducers({
  libraries: LibraryReducer,
  selectedlibrariesId: SelectionReducers,
});
