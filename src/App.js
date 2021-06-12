import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  
  async componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then( response => response.json())
    // .then( users => this.setState( { monsters: users } ));
  
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await usersResponse.json()
    this.setState( { monsters: users } )
  
  }

  handleChange = (e) => {
    return this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">     
      <h1>Monsters Rolodex</h1> 
      <SearchBox placeholder='search monsters'
        handleChange={this.handleChange}
      />
      <CardList monsters={ filteredMonsters } /> 
      </div>
    );
  }
}

export default App;
