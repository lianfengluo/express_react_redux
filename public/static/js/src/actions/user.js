import my_axios from './myaxios.js';

export function signinAction(data) {
  return {
    type: 'USER_SIGNIN',
    payload: my_axios('api/user/signin','POST',data)
  }
}

export function initLoginState(data) {
  return {
    type: 'INIT_LOGIN_STATE',
    payload: null
  }
}
