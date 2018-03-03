import React from 'react';
import NavBarContainer from '../containers/navBarContainer';

const AppWrap = (props) => (
  <div>
    <NavBarContainer/>
    <div className='container'>
      {/*<h1>This is our app component</h1>*/}
      {props.children}
    </div>
    <footer>
      <i className="fas fa-copyright">
      </i>Power By Richard Luo&nbsp;&nbsp;&nbsp;
      <i className="fas fa-envelope"></i>
      lianfengluo28@gmail.com
    </footer>
  </div>
)

export default AppWrap;
