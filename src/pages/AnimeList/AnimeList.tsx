import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import SearchForm from '../../components/SearchForm/SearchForm';

const AnimeList = () => {
  const navigate = useNavigate();

  const navigateToDiscover = () => navigate('/discover/trending');
  return (
    <div style={{ margin: '0 0' }}>
      <SearchForm />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ marginBottom: 15 }}>Trending Now</h3>

        <button type="button" onClick={navigateToDiscover}>View All</button>
      </div>
      <div style={{
        display: 'grid', justifyContent: 'space-between', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gridGap: '25px 20px',
      }}
      >
        <Link to="/detail/123/judul">
          <AnimeCard />
        </Link>
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
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
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
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
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </div>
    </div>
  );
};

export default AnimeList;
