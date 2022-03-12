import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import useSkeleton from '../../components/Skeletons/useSkeleton';
import { formatTitleSlug } from '../../utils/string-helpers';

interface MangaInCategoryProps {
  trending: any;
  topList: any;
  popular: any;
  manhwa: any;
  seasonPopular: any;
}

const MangaInCategory: React.FC<MangaInCategoryProps> = ({
  trending, topList, popular, manhwa, seasonPopular,
}) => {
  const { loadSkeletonCard } = useSkeleton();
  return (
    <div>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: '30px',
      }}
      >
        <h3 style={{ marginBottom: 15 }}>Trending Now</h3>

        <Link style={{ color: 'darkblue' }} to="/discover/anime/trending">View All</Link>
      </Box>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '25px 20px',
      }}
      >
        {trending ? trending?.map((anime: any) => (
          <Link key={anime.id} to={`/anime/${anime.id}/${formatTitleSlug(anime.title.userPreferred)}`}>
            <AnimeCard
              title={anime.title.userPreferred}
              imageUrl={anime.coverImage.large}
              genres={anime.genres}
            />
          </Link>
        ))
          : loadSkeletonCard(5)}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 50,
      }}
      >
        <h3 style={{ marginBottom: 15 }}>Popular This Season</h3>

        <Link style={{ color: 'darkblue' }} to="/discover/123">View All</Link>
      </div>
      <div style={{
        display: 'grid', justifyContent: 'space-between', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gridGap: '25px 20px',
      }}
      >
        {seasonPopular ? seasonPopular?.map((anime: any) => (
          <Link key={anime.id} to={`/anime/${anime.id}/${formatTitleSlug(anime.title.userPreferred)}`}>
            <AnimeCard
              title={anime.title.userPreferred}
              imageUrl={anime.coverImage.large}
              genres={anime.genres}
            />
          </Link>
        ))
          : loadSkeletonCard(5)}
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 50,
      }}
      >
        <h3 style={{ marginBottom: 15 }}>Popular Manhwa</h3>

        <Link style={{ color: 'darkblue' }} to="/discover/123">View All</Link>
      </div>
      <div style={{
        display: 'grid', justifyContent: 'space-between', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gridGap: '25px 20px',
      }}
      >
        {manhwa ? manhwa?.map((anime: any) => (
          <Link key={anime.id} to={`/anime/${anime.id}/${formatTitleSlug(anime.title.userPreferred)}`}>
            <AnimeCard
              title={anime.title.userPreferred}
              imageUrl={anime.coverImage.large}
              genres={anime.genres}
            />
          </Link>
        ))
          : loadSkeletonCard(5)}
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 50,
      }}
      >
        <h3 style={{ marginBottom: 15 }}>All Time Popular</h3>

        <Link style={{ color: 'darkblue' }} to="/discover/123">View All</Link>
      </div>
      <div style={{
        display: 'grid', justifyContent: 'space-between', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gridGap: '25px 20px',
      }}
      >
        {popular ? popular?.map((anime: any) => (
          <Link key={anime.id} to={`/anime/${anime.id}/${formatTitleSlug(anime.title.userPreferred)}`}>
            <AnimeCard
              title={anime.title.userPreferred}
              imageUrl={anime.coverImage.large}
              genres={anime.genres}
            />
          </Link>
        ))
          : loadSkeletonCard(5)}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 50,
      }}
      >
        <h3 style={{ marginBottom: 15 }}>Top 100 Manga</h3>

        <Link style={{ color: 'darkblue' }} to="/discover/anime/top-100">View All</Link>
      </div>
      <div style={{
        display: 'grid', justifyContent: 'space-between', gridTemplateColumns: 'repeat(auto-fill,minmax(185px,1fr))', gridGap: '25px 20px',
      }}
      >
        {topList ? topList?.map((anime: any, index: number) => (
          <Link key={anime.id} to={`/anime/${anime.id}/${anime.title.userPreferred}`}>
            <AnimeCard
              title={anime.title.userPreferred}
              imageUrl={anime.coverImage.large}
              genres={anime.genres}
              rank={index}
              topRank
              color={anime.coverImage.color}
            />
          </Link>
        ))
          : loadSkeletonCard(5)}
      </div>
    </div>
  );
};

export default MangaInCategory;
