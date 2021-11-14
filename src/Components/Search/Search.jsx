import React, {useState} from "react";

const Search = (props) => {
   
  const [title, setTitle] = useState('');

  const onSearchChanged = event => {
    const _title = title;
    setTitle({ title: title });
    console.log(_title)
  };
  const onSubmit = event => {
    event.preventDefault();
    props.onSearch(title);
  };
  
    return (
      <>
        <form onSubmit={onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input
              id="video-search"
              type="text"
              value={title}
              onChange={(event) => onSearchChanged(event.target.value)}
              placeholder="Enter Keyword"
            />
          </div>
        </form>
      </>
    );
  
}

export default Search;