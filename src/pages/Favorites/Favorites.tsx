import Box from '@mui/material/Box';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import FavoritesItem from '../../components/FavoritesItem/FavoritesItem';

const Favorites = () => {
  const url = 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131681-ODIRpBIbR5Eu.jpg';
  const favoritesItem = [
    {
      id: 1, title: 'Attack on Titan', imageUrl: url, genres: ['action', 'mystery'],
    },
    {
      id: 2, title: 'Attack on Titan', imageUrl: url, genres: ['action', 'mystery'],
    },
    {
      id: 3, title: 'Attack on Titan', imageUrl: url, genres: ['action', 'mystery'],
    },
  ];

  return (
    <Layout>
      <h1>Favorites</h1>

      <Box sx={{ mt: 10 }}>
        {favoritesItem.map((item) => (
          <FavoritesItem imageUrl={item.imageUrl} genres={item.genres} title={item.title} />
        ))}
      </Box>

    </Layout>
  );
};

export default Favorites;
