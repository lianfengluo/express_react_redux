import React from 'react';
import { ValidateUsername, ValidatePassword } from './Validator'

class userSignin extends React.Component{
  constructor(){
    super();
  };
  componentWillReceiveProps(nextProps) {
  }
  formSubmit(e){
    e.preventDefault();
    let verifier = true;
    const child = this.refs.errorInfo.childNodes;
    if(!ValidateUsername(this.refs.username.value)){
        child[0].style.display = 'block';
        verifier = false;
    } else {
        child[0].style.display = 'none';
    }
    if(!ValidatePassword(this.refs.password.value)){
        child[1].style.display = 'block';
        verifier = false;
    } else {
        child[1].style.display = 'none';
    }
    if(verifier){
        const submit_data = {'username': this.refs.username.value,
                        'password': this.refs.password.value};
        console.log(submit_data);
    }
  }
  componentWillMount(){
    document.getElementById("body").className+=' signinBg'
  }
  componentWillUnmount(){
    if ( document.getElementById("body").className.includes('signinBg')){
        document.getElementById("body").className = document.getElementById("body").className.replace(' signinBg','')
    }
  }
  render(){
    return(
    <div className='userSignin'>
        <form onSubmit={(e) => this.formSubmit(e)} autoComplete="off">
            <center>Richard Website</center>
            <div className='errorInfo' ref='errorInfo'>
                <div className='errorUsername'>Invalid username.</div>
                <div className='errorPassword'>Invalid password.</div>
            </div>
            <input ref='username' type="text" name="username" placeholder='username' className='username'/>
            <p style={{'fontSize':'5px'}}></p>
            {/*<br style={{"lineHeight":"5px"}}/>*/}
            <input ref='password' type="password" name="password" placeholder='password' />
            <br/>
            <button type='submit'>Sign in</button>
        </form>
    </div>
  )
  }
}

export default userSignin;