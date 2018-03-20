import React, { Component } from 'react';
import './styles.css';
// import * as firebase from 'firebase';

let contacts = [{
  name : "Scott",
  phone : "503-555-1212"
}, {
  name : "Jennifer",
  phone : "503-555-1213"
}, {
  name : "Juanita",
  phone : "503-555-1214"
}, {
  name : "Perry",
  phone : "503-555-1215"
}]

class Seeds extends Component {

  // callApi(){
  //   // Github fetch library : https://github.com/github/fetch
  //   // Call the API page
  //   fetch('http://date.jsontest.com')
  //   .then((result) => {
  //     // Get the result
  //     // If we want text, call result.text()
  //     return result.json();
  //   }).then((jsonResult) => {
  //     console.log(jsonResult);
  //   })
  // }

  render() {
    return (
      // <div>
      //   <button onClick={() => this.callApi()}>
      //     Click here to call API
      //   </button>
      // </div>
        <li>
          {this.props.seed.name} {this.props.seed.phone}
        </li>
    );
  }
}

export default Seeds;
