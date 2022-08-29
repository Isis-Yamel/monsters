import './searchBox.css';

const SearchBox = ({ searchHandler }) => {
  return (
    <input className="search-box" type="search" placeholder='Search Monsters' 
      onChange={ searchHandler }/>
  )
}

export default SearchBox;