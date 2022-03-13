import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { isTopRank } from '../../utils/filter-helpers';
import { getTitleFromSlug } from '../../utils/string-helpers';
import Tag from '../Tag/Tag';

const Card = styled.div`
  display: block;
  width: 185px;
  margin: auto;
  border-radius: 5px;
  position: relative;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  p {
    font-size: 14px;
    color: black;
  }
`;

interface AnimeCardProps {
  imageUrl: string;
  title: string;
  genres: Array<string>;
  rank?: number | undefined;
  color?: string | undefined;
  topRank?: boolean;
}

const AnimeCard: React.FC<AnimeCardProps> = ({
  imageUrl, title, genres, rank, color, topRank,
}) => {
  const { category } = useParams();
  const topRanking = isTopRank(getTitleFromSlug(category!), rank! + 1) || topRank;
  return (
    <Card className="anime-card">
      {topRanking && (
        <Box sx={{
          width: 30,
          height: 30,
          background: color || 'darkBlue',
          borderRadius: '50%',
          position: 'absolute',
          top: -10,
          left: -10,
          fontWeight: 'bold',
          fontSize: '12px',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          #
          {rank! + 1}
        </Box>
      )}
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: '5px',
          rowGap: '5px',
          mt: 1,
        }}
      >
        {genres.slice(0, 3).map((genre) => <Tag key={genre} content={genre} />)}
      </Box>
    </Card>
  );
};

AnimeCard.defaultProps = {
  rank: undefined,
  color: undefined,
  topRank: false,
};

export default AnimeCard;
