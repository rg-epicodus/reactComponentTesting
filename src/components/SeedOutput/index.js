import React, { Component } from 'react';
import './styles.css';

class SeedOutput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cultivar: '',
      species: '',
      source: '',
      packDate: '',
      pic: '',
      link: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

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
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Seeds in the Box</h1>

            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form>
                <input type="text" name="name" placeholder="Common Name" onChange={this.handleChange} value={this.state.name}/>
                <input type="text" name="cultivar" placeholder="Cultivar" onChange={this.handleChange} value={this.state.cultivar}/>
                <input type="text" name="species" placeholder="Species" onChange={this.handleChange} value={this.state.species}/>
                <input type="text" name="source" placeholder="Source" onChange={this.handleChange} value={this.state.source}/>
                <input type="text" name="packDate" placeholder="Pack Date" onChange={this.handleChange} value={this.state.packDate}/>
                <input type="text" name="source" placeholder="Picture" onChange={this.handleChange} value={this.state.pic}/>
                <input type="text" name="packDate" placeholder="Link" onChange={this.handleChange} value={this.state.link}/>
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
      // <div>
      //   <button onClick={() => this.callApi()}>
      //     Click here to call API
      //   </button>
      //   <h2>{this.jsonResult}</h2>
      // </div>
        // <li>
        //   {this.props.seed.name} {this.props.seed.phone}
        // </li>
    );
  }
}

export default SeedOutput;
