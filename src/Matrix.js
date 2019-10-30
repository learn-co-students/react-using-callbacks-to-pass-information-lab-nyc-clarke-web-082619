import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state = {
    color: ""
  }

  setColor = (color) => { 
    this.setState({color: color})  
  }

  changeColor = () => {
    return this.state.color;
  }
  
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} changeColor={this.changeColor} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log("MATRIX    " + this.state.color);
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
