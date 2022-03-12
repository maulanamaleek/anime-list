import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Box } from '@mui/material';
import { FILTER_ANIME } from '../../utils/gql-helpers';
import { Filter } from '../../models/filter';
import AnimeCard from '../AnimeCard/AnimeCard';
import { formatTitleSlug } from '../../utils/string-helpers';

const FilteredList: React.FC<Filter> = ({
  search, year, genre, country, page,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [anime, setAnime] = useState<Array<any>>([]);
  const removeEmpty = () => {
    const params: any = {};
    if (search) params.search = search;
    if (year) params.year = Number(year);
    if (genre) params.genres = [genre];
    if (country) params.countryOfOrigin = country;

    return params;
  };

  const { data } = useQuery(FILTER_ANIME, {
    variables: {
      page,
      ...removeEmpty(),
    },
  });

  useEffect(() => {
    setAnime(data?.Page?.media);
    console.log(data?.Page?.media);
  }, [data]);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        justifyContent: 'space-between',
        rowGap: '30px',
      }}
    >
      {anime?.map((item) => (
        <Link key={item.id} to={`/anime/${item.id}/${formatTitleSlug(item.title.userPreferred)}`}>
          <AnimeCard
            imageUrl={item.coverImage.large}
            title={item.title.userPreferred}
            genres={item.genres}
          />
        </Link>
      ))}
    </Box>
  );
};

export default FilteredList;
