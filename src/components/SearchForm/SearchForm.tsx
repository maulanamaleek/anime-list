import React from 'react';

const SearchForm = () => (
  <div style={{ display: 'flex', columnGap: 10 }}>
    <div>
      <p>Search</p>
      <input />
    </div>
    <div>
      <p>Genres</p>
      <input />
    </div>
    <div>
      <p>Year</p>
      <input />
    </div>
    <div>
      <p>Format</p>
      <input />
    </div>
    <div>
      <p>Country</p>
      <input />
    </div>
  </div>
);

export default SearchForm;
