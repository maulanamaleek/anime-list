/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import React, { ChangeEvent, useState } from 'react';
import { Pagination, Stack } from '@mui/material';
import Layout from '../../components/Layout/Layout';
import FavoritesItem from '../../components/FavoritesItem/FavoritesItem';
import {
  countFavoritePage, getCurrentPageItem, getLocalFavorites, removeFavorite,
} from '../../utils/local-storage';

const Favorites = () => {
  const perPage = 10;
  const localFavorites = getLocalFavorites();
  const totalPage = countFavoritePage(perPage);
  const [page, setPage] = useState(1);
  const [favorite, setFavorite] = useState(localFavorites);
  const currentValue = getCurrentPageItem(page, totalPage, perPage);
  const [currentItems, setCurrentItems] = useState(currentValue);

  const deleteItem = (id: number) => {
    removeFavorite(id);
    setFavorite(getLocalFavorites());
    const newCurrentPage = getCurrentPageItem(page, totalPage, perPage);
    setCurrentItems(newCurrentPage);
  };

  const handleChange = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p);
    const newCurrentPage = getCurrentPageItem(p, totalPage, perPage);
    setCurrentItems(newCurrentPage);
  };

  return (
    <Layout>
      <h1>Favorites</h1>

      <Box sx={{ mt: 10 }}>
        {currentItems?.length ? (
          currentItems.map((item) => (
            <FavoritesItem
              key={item.id}
              deleteItem={() => deleteItem(item?.id)}
              imageUrl={item?.coverImage?.large}
              genres={item?.genres}
              title={item?.title?.userPreferred}
            />
          ))
        ) : <h1>You have no Favorite yet</h1>}

        {totalPage > 1 && (
          <Stack margin="auto" width="fit-content" spacing={2}>
            <Pagination count={totalPage} page={page} onChange={handleChange} shape="rounded" />
          </Stack>
        )}

      </Box>

    </Layout>
  );
};

export default Favorites;
