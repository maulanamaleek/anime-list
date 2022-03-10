import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';

const AnimeList = () => {
  const url = 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131681-ODIRpBIbR5Eu.jpg';
  const animeList = [
    {
      id: 1, title: 'Attack on Titan', imageUrl: url, genres: ['action', 'mystery'],
    },
    {
      id: 2, title: 'Attack on Titan', imageUrl: url, genres: ['action', 'mystery'],
    },
    {
      id: 3, title: 'Attack on Titan', imageUrl: url, genres: ['action', 'mystery'],
    },
    {
      id: 4, title: 'Attack on Titan', imageUrl: url, genres: ['action', 'mystery'],
    },
    {
      id: 5, title: 'Attack on Titan', imageUrl: url, genres: ['action', 'mystery'],
    },
  ];

  return (
    <Layout>
      <SearchForm />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: '30px',
      }}
      >
        <h3 style={{ marginBottom: 15 }}>Trending Now</h3>

        <Link style={{ color: 'darkblue' }} to="/discover/123">View All</Link>
      </Box>
      <div style={{
        display: 'grid', justifyContent: 'space-between', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gridGap: '25px 20px',
      }}
      >
        {animeList.map((anime) => (
          <Link to={`/detail/${anime.id}/${anime.title}`}>
            <AnimeCard title={anime.title} imageUrl={anime.imageUrl} genres={anime.genres} />
          </Link>
        ))}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 50,
      }}
      >
        <h3 style={{ marginBottom: 15 }}>Upcoming Next Season</h3>

        <a href="/">View All</a>
      </div>
      <div style={{
        display: 'grid', justifyContent: 'space-between', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gridGap: '25px 20px',
      }}
      >
        {animeList.map((anime) => (
          <Link to={`/detail/${anime.id}/${anime.title}`}>
            <AnimeCard title={anime.title} imageUrl={anime.imageUrl} genres={anime.genres} />
          </Link>
        ))}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 50,
      }}
      >
        <h3 style={{ marginBottom: 15 }}>All Time Popular</h3>

        <a href="/">View All</a>
      </div>
      <div style={{
        display: 'grid', justifyContent: 'space-between', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gridGap: '25px 20px',
      }}
      >
        {animeList.map((anime) => (
          <Link to={`/detail/${anime.id}/${anime.title}`}>
            <AnimeCard title={anime.title} imageUrl={anime.imageUrl} genres={anime.genres} />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default AnimeList;
