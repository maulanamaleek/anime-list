import { Skeleton, Stack, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import { formatTitleSlug } from '../../utils/string-helpers';

interface AnimeInCategoryProps {
  trending: any;
  topList: any;
  popular: any;
  upcoming: any;
  seasonPopular: any;
}

const AnimeInCategory: React.FC<AnimeInCategoryProps> = ({
  trending, topList, popular, upcoming, seasonPopular,
}) => (
  <div>
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
      {trending?.map((anime: any) => (
        <Link key={anime.id} to={`/anime/${anime.id}/${formatTitleSlug(anime.title.userPreferred)}`}>
          <AnimeCard
            title={anime.title.userPreferred}
            imageUrl={anime.coverImage.large}
            genres={anime.genres}
          />
        </Link>
      ))}

      <Stack spacing={1} margin="auto">
        <Skeleton variant="rectangular" width={185} height={200} />
        <Skeleton variant="text" height={30} width={120} />
      </Stack>
    </div>
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 50,
    }}
    >
      <h3 style={{ marginBottom: 15 }}>Popular This Season</h3>

      <a href="/discover">View All</a>
    </div>
    <div style={{
      display: 'grid', justifyContent: 'space-between', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gridGap: '25px 20px',
    }}
    >
      {seasonPopular?.map((anime: any) => (
        <Link key={anime.id} to={`/anime/${anime.id}/${formatTitleSlug(anime.title.userPreferred)}`}>
          <AnimeCard
            title={anime.title.userPreferred}
            imageUrl={anime.coverImage.large}
            genres={anime.genres}
          />
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
      {upcoming?.map((anime: any) => (
        <Link key={anime.id} to={`/anime/${anime.id}/${formatTitleSlug(anime.title.userPreferred)}`}>
          <AnimeCard
            title={anime.title.userPreferred}
            imageUrl={anime.coverImage.large}
            genres={anime.genres}
          />
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
      {popular?.map((anime: any) => (
        <Link key={anime.id} to={`/anime/${anime.id}/${formatTitleSlug(anime.title.userPreferred)}`}>
          <AnimeCard
            title={anime.title.userPreferred}
            imageUrl={anime.coverImage.large}
            genres={anime.genres}
          />
        </Link>
      ))}
    </div>
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 50,
    }}
    >
      <h3 style={{ marginBottom: 15 }}>Top 100 Anime</h3>

      <a href="/">View All</a>
    </div>
    <div style={{
      display: 'grid', justifyContent: 'space-between', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gridGap: '25px 20px',
    }}
    >
      {topList?.map((anime: any) => (
        <Link key={anime.id} to={`/anime/${anime.id}/${anime.title.userPreferred}`}>
          <AnimeCard
            title={anime.title.userPreferred}
            imageUrl={anime.coverImage.large}
            genres={anime.genres}
          />
        </Link>
      ))}
    </div>
  </div>
);

export default AnimeInCategory;
