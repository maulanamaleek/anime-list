/* eslint-disable no-unused-vars */
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { useReactiveVar } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import { contentType, countryOption, yearOption } from '../../config/filter';
import { filtersVar, FILTER_ANIME, GET_GENRES } from '../../utils/gql-helpers';
import CustomTextField from '../CustomTextField/CustomTextField';
import FilteredList from '../FilteredList/FilteredList';
import SelectBox from '../SelectBox/SelectBox';
import Tag from '../Tag/Tag';
import { isFilterEmpty } from '../../utils/filter-helpers';

interface Genre {
  label: string;
  value: string;
}

const SearchForm = () => {
  const { data } = useQuery(GET_GENRES);
  const filter = useReactiveVar(filtersVar);
  // const filters = filtersVar);
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [search, setSearch] = useState<string>('');
  const [year, setYear] = useState<{ label: string, value: string }>({ label: '', value: '' });
  const [selectedGenres, setSelectedGenres] = useState<{ label: string, value: string }>({ label: '', value: '' });
  const [country, setCountry] = useState<{ label: string, value: string }>({ label: '', value: '' });
  const [type, setType] = useState<any>('All');

  useEffect(() => {
    console.log(search, year, selectedGenres, country);
    filtersVar({
      search, year: year.label, genre: selectedGenres.value, country: country.value,
    });
  }, [search, country, selectedGenres, year]);

  useEffect(() => {
    const genreInObject = data?.genres?.map((genreString: string) => ({
      label: genreString, value: genreString,
    }));
    setGenres(genreInObject);
  }, [data]);

  return (
    <>
      <span>Discover</span>
      <Select
        value={type}
        onChange={(e) => setType(e.target.value)}
        displayEmpty
        sx={{ ml: 3 }}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {contentType.map((item) => (
          <MenuItem value={item.label}>
            {item.label}
          </MenuItem>
        ))}

      </Select>
      <div style={{ display: 'grid', columnGap: 15, gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <CustomTextField onChange={setSearch} value={search} />
        <SelectBox onChange={setSelectedGenres} value={selectedGenres} option={genres} label="Genres" />
        <SelectBox onChange={setYear} value={year} option={yearOption} label="Year" />
        <SelectBox onChange={setCountry} value={country} option={countryOption} label="Country" />
      </div>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!isFilterEmpty(filter) && <LocalOfferIcon sx={{ color: 'darkBlue', mr: 2 }} />}
        <Box
          sx={{
            display: 'flex',
            columnGap: 1,
            alignItems: 'center',
          }}
        >
          {search && <Tag content={`Search: ${search}`} />}
          {selectedGenres.label && <Tag content={`${selectedGenres.label}`} />}
          {year.label && <Tag content={year.label} />}
          {country.label && <Tag content={country.label} />}
        </Box>
      </Box>
    </>
  );
};

export default SearchForm;
