import React, { Component } from 'react';
import './styles.css';
import firebase from '../../firebase.js';

class SeedOutput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      id: '',
      cultivar: '',
      species: '',
      source: '',
      packDate: '',
      pic: '',
      link: '',
      seeds: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
  e.preventDefault();
  const seedsRef = firebase.database().ref('seeds');
  const seed = {
    name: this.state.name,
    id: this.state.id,
    cultivar: this.state.cultivar,
    species: this.state.species,
    source: this.state.source,
    packDate: this.state.packDate,
    pic: this.state.pic,
    link: this.state.link
  }
  seedsRef.push(seed);
  this.setState({
    name: '',
    id: '',
    cultivar: '',
    species: '',
    source: '',
    packDate: '',
    pic: '',
    link: ''
  });
}

componentDidMount() {
  const seedsRef = firebase.database().ref('seeds');
  seedsRef.on('value', (snapshot) => {
    let seeds = snapshot.val();
    let newState = [];
    for (let seed in seeds) {
      newState.push({
        id: seed,
        name: seeds[seed].name,
        cultivar: seeds[seed].cultivar,
        species: seeds[seed].species,
        source: seeds[seed].source,
        packDate: seeds[seed].packDate,
        pic: seeds[seed].pic,
        // link: seeds[seed].link,
      });
    }
    this.setState({
      seeds: newState
    });
  });
}

removeSeed(seedId) {
  const seedRef = firebase.database().ref(`/seeds/${seedId}`);
  seedRef.remove();
}

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
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Common Name" onChange={this.handleChange} value={this.state.name}/>
                <input type="text" name="id" placeholder="Store Id" onChange={this.handleChange} value={this.state.id}/>
                <input type="text" name="cultivar" placeholder="Cultivar" onChange={this.handleChange} value={this.state.cultivar}/>
                <input type="text" name="species" placeholder="Species" onChange={this.handleChange} value={this.state.species}/>
                <input type="text" name="source" placeholder="Source" onChange={this.handleChange} value={this.state.source}/>
                <input type="text" name="packDate" placeholder="Pack Date" onChange={this.handleChange} value={this.state.packDate}/>
                <input type="text" name="pic" placeholder="Picture" onChange={this.handleChange} value={this.state.pic}/>
                <input type="text" name="link" placeholder="Link" onChange={this.handleChange} value={this.state.link}/>
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
                {this.state.seeds.map((seed) => {
                  return (
                    <li key={seed.id}>
                      <h3>{seed.name}</h3>
                      <p>Cultivar: {seed.cultivar}</p>
                      <p>Species: {seed.species}</p>
                      <p>Source: {seed.source}</p>
                      <p>Pack Date: {seed.packDate}</p>
                      <p>Picture: {seed.pic}</p>
                      <button onClick={() => this.removeSeed(seed.id)}>Remove Seed</button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SeedOutput;
