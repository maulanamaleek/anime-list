/* eslint-disable no-unused-vars */
import { useReactiveVar } from '@apollo/client';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useParams } from 'react-router-dom';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import FilteredList from '../../components/FilteredList/FilteredList';
import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getTitleFromSlug } from '../../utils/string-helpers';
import { checkTopCategory } from '../../utils/filter-helpers';
import { filtersVar } from '../../utils/gql-helpers';

interface DiscoverProps {
  type: 'ANIME' | 'MANGA';
}

const Discover: React.FC<DiscoverProps> = ({ type }) => {
  const filters = useReactiveVar(filtersVar);
  const { category } = useParams();
  const title = getTitleFromSlug(category!);
  const isTopCategory = checkTopCategory(title);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    filtersVar({ ...filters, type });
    if (title?.toUpperCase() === 'TOP 100') filtersVar({ ...filters, sort: 'SCORE_DESC', type: 'ANIME' });
  }, []);

  return (
    <Layout>
      <Box>
        {isTopCategory && (
          <h1 style={{ textTransform: 'capitalize', marginBottom: '30px' }}>
            {title}
          </h1>
        )}
      </Box>
      <SearchForm />
      <FilteredList
        {...filters}
      />
    </Layout>
  );
};

export default Discover;
