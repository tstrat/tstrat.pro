import React, { Component } from "react";
import P5Wrapper from 'react-p5-wrapper';

import sketch from "./sketch.js";

class SketchContainer extends Component {


  render() {
    // console.log("::: P5Wrapper.props:", this.props);
    return (
      <P5Wrapper sketch={sketch}/>
    );
  }
}

export default SketchContainer;
