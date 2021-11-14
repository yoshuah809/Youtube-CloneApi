import React, {useState} from "react";

const Search = (props) => {
   
  const [term, setTerm] = useState("");

  const handleChange = event => {
    setTerm(event.target.value);
    
  };
  const onSubmit = event => {
    event.preventDefault();
    props.onSearch(term);
  };
  
    return (
      <>
        <form onSubmit={onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input
              id="video-search"
              type="text"
              value={term}
              onChange={handleChange}
              placeholder="Enter Keyword"
            />
          </div>
        </form>
      </>
    );
  
}

export default Search;