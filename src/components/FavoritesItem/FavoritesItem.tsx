import Box from '@mui/material/Box';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Tag from '../Tag/Tag';

interface FavoritesProps {
  imageUrl: string;
  title: string;
  genres: Array<string>;
  deleteItem: Function;
}

const FavoritesItem: React.FC<FavoritesProps> = ({
  imageUrl, title, genres, deleteItem,
}) => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2,
  }}
  >
    <img width={100} style={{ objectFit: 'cover' }} height={100} src={imageUrl} alt={title} />
    <Box>
      <h4>{title}</h4>
      <p>
        {genres.map((genre) => <Tag key={genre} content={genre} />)}
      </p>
    </Box>
    <Box component="button" onClick={() => deleteItem()}>
      <DeleteIcon color="warning" />
    </Box>

  </Box>
);

export default FavoritesItem;
