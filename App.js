import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

// import  Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Video from './backgroundvideo.mp4';
import './App.css';



class App extends Component {
  render() {
    return (
        <video src ={Video} autoPlay loop />
    
    )
  }
}





export default App;
