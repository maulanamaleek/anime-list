import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useReactiveVar } from '@apollo/client';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { FilterList } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { countryOption, yearOption } from '../../config/filter';
import { GET_GENRES } from '../../utils/gql-helpers';
import CustomTextField from '../CustomTextField/CustomTextField';
import SelectBox from '../SelectBox/SelectBox';
import Tag from '../Tag/Tag';
import { isFilterEmpty } from '../../utils/filter-helpers';
import { filtersVar } from '../../utils/store';

interface Genre {
  label: string;
  value: string;
}

interface SelectOption {
  label: string;
  value: string;
}

const SearchForm = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { data: genreList } = useQuery(GET_GENRES);
  const filter = useReactiveVar(filtersVar);
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [search, setSearch] = useState<string>('');
  const [year, setYear] = useState<SelectOption>({ label: '', value: '' });
  const [selectedGenres, setSelectedGenres] = useState<SelectOption>({ label: '', value: '' });
  const [country, setCountry] = useState<SelectOption>({ label: '', value: '' });
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    filtersVar({
      ...filter, search, year: year.label, genre: selectedGenres.value, country: country.value,
    });
  }, [search, country, selectedGenres, year]);

  useEffect(() => {
    const genreInObject = genreList?.genres?.map((genreString: string) => ({
      label: genreString, value: genreString,
    }));
    setGenres(genreInObject);
  }, [genreList]);

  const resetFilter = () => {
    const emptyOption = { label: '', value: '' };
    setSearch('');
    setYear(emptyOption);
    setSelectedGenres(emptyOption);
    setCountry(emptyOption);
  };

  const getLabelFromValue = (option: Array<SelectOption>, value: string) => (
    option.filter((item) => item.value === value)[0].label
  );

  return (
    <Box
      sx={{
        mt: isMobile ? 8 : 0,
      }}
    >

      {/* MOBILE SEARCH FORM */}
      {isMobile ? (
        <>
          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            columnGap: 2,
          }}
          >
            <Box sx={{ flex: 1 }}>
              <CustomTextField onChange={setSearch} value={search} />
            </Box>
            <Box
              component="button"
              sx={{
                height: '50px',
                background: 'transparent',
              }}
              onClick={() => setOpenMobile(!openMobile)}
            >
              <FilterList />
            </Box>
          </Box>
          <Box sx={{
            display: openMobile ? 'flex' : 'none',
            flexDirection: 'column',
            rowGap: 3,
            transition: 'all ease .5s',
            mt: 2,
          }}
          >
            <SelectBox onChange={setSelectedGenres} value={selectedGenres} option={genres} label="Genres" />
            <SelectBox onChange={setYear} value={year} option={yearOption} label="Year" />
            <SelectBox onChange={setCountry} value={country} option={countryOption} label="Country" />
          </Box>

        </>
      ) : (
        <Box sx={{
          display: 'grid',
          columnGap: 15,
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
        >
          <CustomTextField onChange={setSearch} value={search} />
          <SelectBox onChange={setSelectedGenres} value={selectedGenres} option={genres} label="Genres" />
          <SelectBox onChange={setYear} value={year} option={yearOption} label="Year" />
          <SelectBox onChange={setCountry} value={country} option={countryOption} label="Country" />
        </Box>
      )}

      <Box
        sx={{
          mb: 5,
          mt: 3,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!isFilterEmpty(filter) && (
          <>
            <LocalOfferIcon sx={{ color: 'darkBlue', mr: 2 }} />
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
              {(country.label || filter.country) && (
                <Tag content={country.label || getLabelFromValue(countryOption, filter.country)} />
              )}

              <button
                onClick={resetFilter}
                type="button"
                style={{
                  background: 'transparent',
                  color: 'red',
                }}
              >
                Clear All
              </button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default SearchForm;
