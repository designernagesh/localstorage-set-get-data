import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends Component {
  setData = () => {
    localStorage.setItem('myData', 'Nagesh Kumar')

    let obj = {
      name: 'bhanu kumar',
      age: 2,
      email: 'designer.nagesh@gmail.com'
    }
    localStorage.setItem('myObjData', JSON.stringify(obj))
  }
  getData = () => {
    let data = localStorage.getItem('myData')
    console.log(data)

    let objData = localStorage.getItem('myObjData')
    objData = JSON.parse(objData)
    console.log(objData.name)
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>
          Set Data, Get Data, Remove Data from Local Data in React JS
        </p>
        <button onClick={this.setData}> Set Data</button>
        <br />
        <br />
        <button onClick={this.getData}> Get Data </button>
      </div>
    );
  }
}

ReactDOM.render(<App title='Local Storage' />, document.getElementById('root'));
