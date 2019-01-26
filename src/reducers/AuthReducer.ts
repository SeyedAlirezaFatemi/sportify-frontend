import { AuthActions } from '../actions';

const INITIAL_STATE = {
  token: '',
  email: '',
  userId: '',
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  console.log(action)
  switch (action.type) {
    case AuthActions.SET_USER_INFO:
      const { email, userId, token } = action;
      return {
        ...state,
        email,
        userId,
        token,
      };
    default:
      return state
  }
}
