import AuthActions from '../actions/AuthActions';

const INITIAL_STATE = {
  email: '',
  userId: '',
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AuthActions.SET_USER_INFO:
      const { email, userId } = action;
      return {
        ...state,
        email,
        userId,
      };
    default:
      return state
  }
}
