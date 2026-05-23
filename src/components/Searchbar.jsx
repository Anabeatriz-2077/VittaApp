import "./SearchBar.css";

function SearchBar({ onSearch }) {

  return (
    <input
      type="text"
      placeholder="Busque seu profissional"
      
      /*
      Evento onChange
      */
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;