import React from 'react';
import Img from 'react-image';
import Image from 'react-image-resizer';
const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
class Images extends React.Component {
    render() {
       return(
        <div> 
            <h1>BlackWork</h1> 
        <img height={ 100 }
          width={ 100} style={style.img} src={
      require('../blackwork/body.jpg')
    }></img>
    
        <h1>OldSchool</h1>
        <img height={ 100 }
          width={ 100} style={style.img} src={[
      require('../oldSchool/one.jpg'),
    ]}></img>
        <h1>Tribal</h1>
        <img height={ 100 }
          width={ 100} style={style.img} src={[
      require('../tribal/one.jpg'),
    ]}></img>
        <h1>Japanese</h1>
        <img height={ 100 }
          width={ 100} style={style.img} src={[
      require('../japanese/back.jpg'),
    ]}></img>
        </div>
       );

    }
   
 };

  export default Images;