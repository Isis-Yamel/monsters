import { Component } from 'react';
import CardList from './components/cardList/cardList';
import SearchBox from './components/searchBox/searchBox';

import './App.css';

class App extends Component {

  state = {
    monsters: [],
    searchInput: '',
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {
          monsters: users
        }
      }));
  }

  handleSearch = (event) => {
    this.setState(() => {
      return { searchInput: event.target.value };
    });
  }

  render() {
    const { monsters, searchInput } = this.state;
    const { handleSearch } = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
      <div className="App">
        <SearchBox searchHandler={ handleSearch } />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  };
};

export default App;
