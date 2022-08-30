import { useEffect, useState } from 'react';
import CardList from './components/cardList/cardList';
import SearchBox from './components/searchBox/searchBox';

import './App.css';

const App = () => {
  const [ monsters, setMonsters ] = useState([]);
  const [ filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [ searchInput, setSearchInput ] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchInput]);

  const handleSearch = (event) => setSearchInput(event.target.value);

  return (
    <div>
      <h1 className='app-title'> 
        monsters rolo 
      </h1>
      <SearchBox searchHandler={ handleSearch } />
      <CardList monsters={ filteredMonsters } />
    </div>
  );
};

export default App;
