import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';
import Tag from '../Tag/Tag';

const Card = styled.div`
  display: block;
  width: 185px;
  margin: auto;
  border-radius: 5px;
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

interface Props {
  imageUrl: string;
  title: string;
  genres: Array<string>;
}

const AnimeCard = ({ imageUrl, title, genres }: Props) => (
  <Card>
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
      {genres.map((genre) => <Tag key={genre} content={genre} />)}
    </Box>
  </Card>
);

export default AnimeCard;
