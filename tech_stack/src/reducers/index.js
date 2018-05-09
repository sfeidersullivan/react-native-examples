import { combineReducers } from 'redux';
import Libraries from './Libraries';
import Selection from './Selection';

export default combineReducers({
  libraries: Libraries,
  selectedLibraryId: Selection,
});
