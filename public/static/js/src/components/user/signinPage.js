import React from 'react';

class userSignin extends React.Component{
  constructor(){
    super();
  };
  componentWillReceiveProps(nextProps) {
  }
  formSubmit(){

  }
  render(){
    return(
    <div className='userSignin'>
        <form onSubmit={() => formSubmit()}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" name="username" placeholder='username' />
                            <input type="password" name="password" placeholder='password' />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
  )
  }
}

export default userSignin;