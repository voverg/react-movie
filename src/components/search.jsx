import { useState } from 'react';

export function Search({onSearch}) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(search, type);
    // setSearch('');
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const handleType = (event) => {
    setType(event.target.value);
  }

  return (
    <div className="search">
      <form
        className="search__form"
        onSubmit={onSubmit}
      >
        <div className="search__top">
          <input
            type="search"
            name="search"
            className="search__input"
            value={search}
            placeholder="search..."
            // onChange={(event) => setSearch(event.target.value)}
            onChange={handleSearch}
          />
          <button type="submit" className="search__btn">Search</button>
        </div>
        <div className="search__bottom">
          <label>
            <input
              type="radio"
              name="type"
              value=""
              checked={type === ''}
              onChange={handleType}
            /> All
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="movie"
              checked={type === 'movie'}
              onChange={handleType}
            /> Movies
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="series"
              checked={type === 'series'}
              onChange={handleType}
            /> Series
          </label>
        </div>
      </form>
    </div>
  );

}