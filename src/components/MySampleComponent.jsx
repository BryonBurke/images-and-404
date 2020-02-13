import React from 'react';
import puppy1 from '../assets/images/puppy1.png';
import puppy2 from '../assets/images/puppy2.png';

function MySampleComponent(){
  return (
    <div>
      <img src={puppy1}/>
      <img src={puppy2}/>
    </div>
  );
}

export default MySampleComponent;
