import React from 'react';
import Img from 'react-image';

class Images extends React.Component {
    render() {
       return(
        <div> 
            <h1>BlackWork</h1> 
        <img src={[
      require('../blackwork/body.jpg'),
      '../blackwork/forearm.jpg',
      '../blackwork/legs.jpg',
      '../blackwork/snake.jpg'
    ]}></img> 
        <h1>OldSchool</h1>
        <img src={[
      require('../oldSchool/one.jpg'),
      '../oldSchool/two.jpg',
      '../oldSchool/three.jpg',
      '../oldSchool/four.jpg'
    ]}></img>
        <h1>Tribal</h1>
        <img src={[
      '../tribal/one.jpg',
      '../tribal/two.jpg',
      '../tribal/three.jpg',
      '..tribal/four.jpg'
    ]}></img>
        <h1>Japanese</h1>
        <img src={[
      '../japanese/back.jpg',
      '../japanese/legs.jpg',
      '../japanese/low.jpg',
      '../japanese/orig.jpeg',
      '../japanese/shoulder.jpg',
    ]}></img>
        </div>
       );

    }
   
 };

  export default Images;