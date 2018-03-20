import React, { Component } from 'react';
import './styles.css';
import * as firebase from 'firebase';


class Seeds extends Component {

  callApi(){
    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    fetch('https://www.reddit.com/r/reactjs.json')
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then((jsonResult) => {
      // Do something with the result
      console.log(jsonResult);
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.callApi()}>
          Click here to call API
        </button>
        <h2>`data: ${this.jsonResult}`</h2>
      </div>
    );
  }
}

export default Seeds;
