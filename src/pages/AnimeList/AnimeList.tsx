/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useReactiveVar } from '@apollo/react-hooks';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';
import { filtersVar, HOME_SCREEN_ANIME } from '../../utils/gql-helpers';
import { isFilterEmpty } from '../../utils/filter-helpers';
import FilteredList from '../../components/FilteredList/FilteredList';
import AnimeInCategory from './AnimeInCategory';

const AnimeList = () => {
  const { data } = useQuery(HOME_SCREEN_ANIME);
  const filters = useReactiveVar(filtersVar);
  const [trending, setTrending] = useState<any>([]);
  const [seasonPopular, setSeasonPopular] = useState<any>([]);
  const [popular, setPopular] = useState<any>([]);
  const [topList, setTopList] = useState<any>([]);
  const [upcoming, setUpcoming] = useState<any>([]);

  useEffect(() => {
    setTrending(data?.trending?.media);
    setSeasonPopular(data?.season?.media);
    setUpcoming(data?.nextSeason.media);
    setPopular(data?.popular?.media);
    setTopList(data?.top?.media);
    console.log(data);
  }, [data]);

  return (
    <Layout>
      <SearchForm />
      {!isFilterEmpty(filters) ? <FilteredList {...filters} /> : (
        <AnimeInCategory
          trending={trending}
          seasonPopular={seasonPopular}
          popular={popular}
          topList={topList}
          upcoming={upcoming}
        />
      )}
    </Layout>
  );
};

export default AnimeList;
