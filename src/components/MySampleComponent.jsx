import React from 'react';
import puppy1 from '../assets/images/puppy1.png';
import puppy2 from '../assets/images/puppy2.png';


function MySampleComponent() {
  const gridthing = {
    display:'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: '10px',

  }


    const imageStyle = {
      height: '50vw'
    }



  return (
    <div style = {gridthing}>
      <img style = {imageStyle} src={puppy1}/>
      <img style = {imageStyle} src={puppy2}/>
    </div>
  );
}

export default MySampleComponent;
