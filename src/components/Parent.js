import React, { useState } from 'react';
import ChildComponent from './Child';


const ParentComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Render the child component and pass the state and a callback function to update the state */}
      <ChildComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default ParentComponent;
