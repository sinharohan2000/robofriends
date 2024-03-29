import './App.css';
import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      robots : robots,
      searchField : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchField : event.target.value })
  }

  render(){
    const {robots,searchField} = this.state;
    var filteredRobot = robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    console.log(filteredRobot)
    return (
      <div className = 'tc'>
        <h1 className = 'f2'>Robo-Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobot} />
      </div>
    );
  }
}

export default App;
