// Promise
// pending
// fulfilled
// rejected
const initalState = {
  signin_success: undefined,
  loading: false,
  errors: [],
  error: null,
  sign_up_info:'',
};

// REDCUER
function loginReducer(state = initalState, action) {
  let signin_success;
  let errors = [];
  switch (action.type) {
    case 'USER_SIGNIN_PENDING':
      return { ...state, loading: true,sign_up_info:'',errors: [] };
    case 'USER_SIGNIN_FULFILLED':
      signin_success = action.payload.data.signin_success;
      return { ...state, loading: false, signin_success };
    case 'USER_SIGNIN_REJECTED':
      if(action.payload.response.data.errors){
        Object.values(action.payload.response.data.errors).map(val => errors.push(val))
      }
      return { ...state, loading: false, error: action.payload.message,errors };
    case 'USER_SIGNIN_REJECTED':
      return initalState;
    default:
      return state;
  }
}

export default loginReducer;