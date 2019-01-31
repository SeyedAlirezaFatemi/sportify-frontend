import { combineReducers } from 'redux';
import { AuthActions } from '../actions';
import AuthReducer from './AuthReducer';

const appReducer = combineReducers({
  auth: AuthReducer,
});

export default (state, action) => {
  if (action.type === AuthActions.SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
