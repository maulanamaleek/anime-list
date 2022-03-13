import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Anime } from '../../models/anime';
import { formatTitleSlug } from '../../utils/string-helpers';
import AnimeCard from '../AnimeCard/AnimeCard';
import CardSkeleton from '../Skeletons/CardSkeleton';

interface AnimeGridProps {
  animeList: Array<Anime>;
}

const AnimeGrid: React.FC<AnimeGridProps> = ({ animeList }) => (
  <Box
    className="grid-card-fit"
  >
    {animeList?.map((anime, index) => {
      if (anime.title.userPreferred === 'SKELETON_CARD') {
        return <CardSkeleton />;
      }
      return (
        <Link key={anime?.id} to={`/${anime?.type?.toLowerCase()}/${anime?.id}/${formatTitleSlug(anime?.title?.userPreferred)}`}>
          <AnimeCard
            imageUrl={anime?.coverImage?.large}
            title={anime?.title?.userPreferred}
            genres={anime?.genres}
            rank={index}
            color={anime?.coverImage?.color}
          />
        </Link>
      );
    })}
  </Box>
);

export default AnimeGrid;
