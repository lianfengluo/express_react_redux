import { connect } from 'react-redux';
import signin from '../components/user/signinPage';
import { withRouter } from 'react-router-dom';
import { signinAction, initSigninState } from '../actions/user';
// import { fetchUserInfo } from '../actions/fetchUserInfo';

const mapStateToProps = (state) => ({
  info: state.signinReducer,
})
const mapDispatchToProps = (dispatch) => {
  return {
    signin: (data) => {
      dispatch(signin(data))
    },
    // fetchUserInfo:() =>{
    //   dispatch(fetchUserInfo())
    // }
  }
}


const signinContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(signin));

export default signinContainer;