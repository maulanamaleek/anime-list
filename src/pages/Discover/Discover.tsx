/* eslint-disable no-unused-vars */
import { useReactiveVar } from '@apollo/client';
import Box from '@mui/material/Box';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import FilteredList from '../../components/FilteredList/FilteredList';
import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';
import { filtersVar } from '../../utils/gql-helpers';

const Discover = () => {
  const filters = useReactiveVar(filtersVar);

  return (
    <Layout>
      <SearchForm />
      <h1 style={{ marginTop: 10, marginBottom: 20 }}>Discover All Anime</h1>
      {/* <InfiniteScroll> */}

      <FilteredList
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...filters}
      />
      {/* </InfiniteScroll> */}
    </Layout>
  );
};

export default Discover;
