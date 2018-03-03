import React from 'react';

class Home extends React.Component{
  constructor(){
    super();
  };
  render(){
    return(
    <div className='home'>
        <div className="window1">
            <h1>COMP9020</h1>
        </div>
        <div className="window2">
            <h1>COMP9021</h1>
        </div>

        <div className="window3">
            <h1>COMP9311</h1>
        </div>

        <div className="window4">
            <h1>GSOE9820</h1>
        </div>
    </div>
  )
  }
}

export default Home;