import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from '../components/navBar/navBar';
// import { fetchUserInfo } from '../actions/fetchUserInfo'
// import { initUserImageState,initEditUserEmailState,initUserNicknameState } from '../actions/userProfile'

const mapStateToProps = (state) => ({
  // userinfo: state.fetchUserInfoReducer,
})
const mapDispatchToProps = (dispatch) => {
  return {
    // fetchUserInfo: () => {
    //   dispatch(fetchUserInfo())
    // },
  }

}


const NavContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar));

export default NavContainer;