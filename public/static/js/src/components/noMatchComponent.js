import React from 'react';

const NoMatchComponent = ({ location }) => (
  <div>
      <center>
        <p className="noMatchStyle">
        No match for 
        <code>{location.pathname}</code>
        </p>
      </center>
  </div>
)

export default NoMatchComponent;