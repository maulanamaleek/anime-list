import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import useSkeleton from '../../components/Skeletons/useSkeleton';
import { Anime } from '../../models/anime';
import { formatTitleSlug } from '../../utils/string-helpers';

interface CategoryLayoutProps {
  data: Array<Anime>;
  title: string;
  type: 'ANIME' | 'MANGA';
  category: string;
  topRank: boolean;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = ({
  data, title, type, category, topRank,
}) => {
  const { loadSkeletonCard } = useSkeleton();
  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '50px',
      }}
      >
        <Typography variant="h3" sx={{ marginBottom: '15px', fontSize: 24 }}>{title}</Typography>

        <Link style={{ color: '#ff9e00' }} to={`/discover/${type.toLowerCase()}/${category}`}>View All</Link>
      </Box>
      {data ? (
        <Box
          className="grid-card-fit"
        >

          {data?.map((anime: Anime, index: number) => (
            <Link key={anime.id} to={`/${type.toLowerCase()}/${anime.id}/${formatTitleSlug(anime.title.userPreferred)}`}>
              <AnimeCard
                title={anime.title.userPreferred}
                imageUrl={anime.coverImage.large}
                genres={anime.genres}
                rank={index}
                topRank={topRank}
                color={anime.coverImage.color}
              />
            </Link>
          ))}
        </Box>
      ) : loadSkeletonCard(6)}
    </>
  );
};

export default CategoryLayout;
