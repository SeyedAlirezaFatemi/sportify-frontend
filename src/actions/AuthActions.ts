export enum AuthActions {
  SET_USER_INFO = 'SET_USER_INFO',
  SIGN_OUT = 'SIGN_OUT',
}

export const setUserInfo = (token, email, userId) => ({
  type: AuthActions.SET_USER_INFO,
  token, email, userId,
});

export const signOut = () => ({
  type: AuthActions.SIGN_OUT,
});

