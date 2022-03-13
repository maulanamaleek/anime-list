/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import React, { ChangeEvent, useState } from 'react';
import { Pagination, Stack } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import {
  countFavoritePage, getCurrentPageItem, getLocalFavorites, removeFavorite,
} from '../../utils/local-storage';
import AnimeGrid from '../../components/AnimeGrid/AnimeGrid';

const Favorites = () => {
  const perPage = 10;
  const totalPage = countFavoritePage(perPage);
  const [page, setPage] = useState(1);
  const currentValue = getCurrentPageItem(page, totalPage, perPage);
  const [currentItems, setCurrentItems] = useState(currentValue);

  const handleChange = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p);
    window.scrollTo({ top: 0 });
    const newCurrentPage = getCurrentPageItem(p, totalPage, perPage);
    setCurrentItems(newCurrentPage);
  };

  return (
    <Layout>
      {currentItems?.length ? (
        <Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
            <Box mb={5}>
              <h1>Favorites</h1>
              <p>See detail to remove</p>
            </Box>
            <button
              style={{
                display: 'block',
                height: 30,
                background: 'transparent',
                color: 'red',
              }}
              type="button"
            >
              Clear All
            </button>
          </Box>
          <AnimeGrid animeList={currentItems} />

          {totalPage > 1 && (
            <Stack margin="auto" width="fit-content" spacing={2}>
              <Pagination count={totalPage} page={page} onChange={handleChange} shape="rounded" />
            </Stack>
          )}
        </Box>
      ) : <h1>You have no Favorite yet</h1>}
    </Layout>
  );
};

export default Favorites;
