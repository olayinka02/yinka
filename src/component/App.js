import React from 'react';
import  {Carousel} from 'react-bootstrap';
import bla1 from '../image/bla1.jpg';
import yinkaa from '../image/yinkaa.jpg';
import Socials from './Socials.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Title from './Title.js';






class App extends React.Component {
 
  render() {
   
          return (
          <div  className="Container fluid">
             <Carousel>
  <Carousel.Item className="carousel">
    <img
      className="d-block w-100"
      src={bla1}
      alt="First slide"
      style={{textAlign:'center',height:800,opacity:'1',}}
    />
    <Carousel.Caption className="caption">
      <div className="Container">
      <img src={yinkaa} className="pic" alt="age" />
      </div>
      <h3 style={{color:'silver',fontSize:20,}}>I'm   <span className="name">  Akinseye 0luwasegun Yinka.</span></h3>
          <h5 style={{fontStyle:'italic',fontSize:14,}}><Title /></h5>
      <div>
       
        
        <Socials  />
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bla1}
      alt="Third slide"
      style={{textAlign:'center',height:800,}}

    />

    <Carousel.Caption  className="aption" style={{color:'white',marginBottom:23,}}>
     
     
      <div>
        <Projects />
      </div>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bla1}
      alt="second slide"
      style={{textAlign:'center',height:800,}}

    />

    <Carousel.Caption   style={{color:'white',marginBottom:6,}}>
     
     
      <div>
        <Skills />
      </div>
     
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
           
          </div>
      );
  }
}

export default App;