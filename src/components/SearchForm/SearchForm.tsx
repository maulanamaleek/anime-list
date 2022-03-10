import React from 'react';
import CustomTextField from '../CustomTextField/CustomTextField';
import SelectBox from '../SelectBox/SelectBox';

const SearchForm = () => (
  <div style={{ display: 'grid', columnGap: 15, gridTemplateColumns: 'repeat(4, 1fr)' }}>
    <CustomTextField />
    <SelectBox label="Genres" />
    <SelectBox label="Year" />
    <SelectBox label="Country" />
  </div>
);

export default SearchForm;
