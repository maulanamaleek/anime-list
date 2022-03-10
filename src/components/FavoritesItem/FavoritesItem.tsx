import Box from '@mui/material/Box';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  imageUrl: string;
  title: string;
  genres: Array<string>;
}

const FavoritesItem = ({ imageUrl, title, genres }: Props) => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2,
  }}
  >
    <img width={100} style={{ objectFit: 'cover' }} height={100} src={imageUrl} alt={title} />
    <Box>
      <h4>Anime Title</h4>
      <p>
        Genre:
        {genres.map((genre) => <span key={genre}>{genre}</span>)}
      </p>
    </Box>
    <DeleteIcon color="warning" />

  </Box>
);

export default FavoritesItem;
