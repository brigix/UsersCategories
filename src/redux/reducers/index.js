import { combineReducers } from 'redux';
import { userRegistration } from './user.reducer';
import { categoryCreation } from './category.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  userRegistration,
  categoryCreation,
  alert,
});

export default rootReducer;
