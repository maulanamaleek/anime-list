import React, { useEffect, useState } from 'react';
import { useQuery, useReactiveVar } from '@apollo/react-hooks';
import { Box } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';
import { HOME_SCREEN_ANIME } from '../../utils/gql-helpers';
import { isFilterEmpty } from '../../utils/filter-helpers';
import FilteredList from '../../components/FilteredList/FilteredList';
import AnimeInCategory from './AnimeInCategory';
import { Anime } from '../../models/anime';
import { filtersVar } from '../../utils/store';

const AnimeList = () => {
  const { data } = useQuery(HOME_SCREEN_ANIME);
  const filters = useReactiveVar(filtersVar);
  const [trending, setTrending] = useState<Array<Anime>>([]);
  const [manhwa, setManhwa] = useState<Array<Anime>>([]);
  const [popular, setPopular] = useState<Array<Anime>>([]);
  const [topList, setTopList] = useState<Array<Anime>>([]);
  const [topManga, setTopManga] = useState<Array<Anime>>([]);
  const [trendingManga, setTrendingManga] = useState<Array<Anime>>([]);

  useEffect(() => {
    setTrending(data?.trending?.media);
    setManhwa(data?.manhwa?.media);
    setTopManga(data?.topManga?.media);
    setTrendingManga(data?.trendingManga?.media);
    setPopular(data?.popular?.media);
    setTopList(data?.top?.media);
  }, [data]);

  return (
    <Layout>
      <Box>

        <SearchForm />
        {!isFilterEmpty(filters) ? <FilteredList {...filters} /> : (
          <AnimeInCategory
            trending={trending}
            manhwa={manhwa}
            trendingManga={trendingManga}
            popular={popular}
            topList={topList}
            topManga={topManga}
          />
        )}
      </Box>
    </Layout>
  );
};

export default AnimeList;
