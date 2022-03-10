import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Box sx={{
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    alignItems: 'center',
    background: 'darkBlue',
    color: 'white',
  }}
  >
    <Box sx={{ padding: '12px 10%', display: 'flex', justifyContent: 'space-between' }}>
      <h1>AnimeList</h1>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        columnGap: 2,
        color: 'white',
      }}
      >
        <Link to="/">Anime List</Link>
        <Link to="/discover/all">Discover</Link>
        <Link to="/favorites">Favorites</Link>
      </Box>
    </Box>
  </Box>
);

export default Navbar;
