import { Box } from '@mui/material';
import React from 'react';
import { Anime } from '../../models/anime';
import CategoryLayout from './CategoryLayout';

interface AnimeInCategoryProps {
  trending: Array<Anime>;
  topList: Array<Anime>;
  popular: Array<Anime>;
  manhwa: Array<Anime>;
  trendingManga: Array<Anime>;
  topManga: Array<Anime>;
}

const AnimeInCategory: React.FC<AnimeInCategoryProps> = ({
  trending, topList, popular, manhwa, trendingManga, topManga,
}) => (
  <Box>
    <CategoryLayout
      title="Trending Anime"
      type="ANIME"
      data={trending}
      topRank={false}
      category="trending"
    />

    <CategoryLayout
      title="Trending Manga"
      type="MANGA"
      data={trendingManga}
      topRank={false}
      category="trending"
    />

    <CategoryLayout
      title="All Time Popular"
      type="ANIME"
      data={popular}
      topRank={false}
      category="popular"
    />

    <CategoryLayout
      title="Popular Manhwa"
      type="MANGA"
      data={manhwa}
      topRank={false}
      category="manhwa"
    />

    <CategoryLayout
      title="Top 100 Anime"
      type="ANIME"
      data={topList}
      topRank
      category="top-100"
    />

    <CategoryLayout
      title="Top 100 Manga"
      type="MANGA"
      data={topManga}
      topRank
      category="top-100"
    />
  </Box>
);

export default AnimeInCategory;
