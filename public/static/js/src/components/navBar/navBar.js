import React from 'react';
import { NavLink,Link } from 'react-router-dom';

export default class NavBarComp extends React.Component {
	constructor(props) {
	  super(props);
	}

	componentWillReceiveProps(nextProps) {
	}
    componentDidMount(){
        
        // let timeout;
        // const ShowNavBar = (event) => {
        //     event = event || window.event; // IE-ism
        //     // if(window.scrollY < 63){
        //     //     clearTimeout(timeout);
        //     //     if(this.refs.navBar.className.indexOf('navBar_hidden') !== -1){
        //     //         this.refs.navBar.className = 'appbar'
        //     //     }
        //     // }
        //     // else {
        //     //     clearTimeout(timeout);
        //     //     if(this.refs.navBar.className.indexOf('navBar_hidden') === -1){
        //     //         timeout = setTimeout(
        //     //                     ()=>{this.refs.navBar.className += ' navBar_hidden'}
        //     //                     ,2000);
        //     //     }
        //     // }
        //     if(event.clientY){
        //         if(event.clientY > 63){
        //             clearTimeout(timeout);
        //             if(this.refs.navBar.className.indexOf('navBar_hidden') === -1){
        //                 timeout = setTimeout(
        //                             ()=>{this.refs.navBar.className += ' navBar_hidden'}
        //                             ,2000);
        //             }
        //         }
        //         else{
        //             clearTimeout(timeout);
        //             if(this.refs.navBar.className.indexOf('navBar_hidden') !== -1){
        //                 this.refs.navBar.className = 'appbar'
        //             }
        //         }
        //     }
        // }
        // window.onmousemove = ShowNavBar;
        // window.onscroll = ShowNavBar;
    }
	render(){
	// const { userinfo } = this.props.userinfo;
    	return(
        <div className='appbar' ref='navBar'>
            <NavLink exact activeClassName="Nav_selected" to="/">
                <i className="homeicon fa fa-home"></i>
            </NavLink>
            <NavLink exact activeClassName="Nav_selected" to="/user">
                <i className="usericon fa fa-user"></i>
            </NavLink>
{/*          <li><NavLink exact activeClassName="Nav_selected" to="/loopback">loopback</NavLink></li>
          <li><NavLink exact activeClassName="Nav_selected" to="/people">people</NavLink></li>*/}
        </div>
        )
	}

}



// export default NavBarComp;