import {
  Box, Button, SwipeableDrawer, useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      alignItems: 'center',
      background: '#240046',
      color: 'white',
      zIndex: 3,
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
          {isMobile ? (
            <>
              <Button
                sx={{
                  background: 'transparent',
                }}
                onClick={() => setIsOpen(true)}
              >
                <MenuIcon sx={{ color: 'white' }} />
              </Button>

              <SwipeableDrawer
                anchor="right"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onOpen={() => setIsOpen(true)}
              >
                <Box
                  className="mobile-menu"
                  sx={{
                    padding: 2,
                    width: '160px',
                  }}
                >
                  <Box
                    component="button"
                    sx={{
                      background: 'transparent',
                      float: 'right',
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <CloseIcon />
                  </Box>
                  <Link to="/">Home</Link>
                  <Link to="/discover/anime">Anime</Link>
                  <Link to="/discover/manga">Manga</Link>
                  <Link to="/favorites">Favorites</Link>
                </Box>
              </SwipeableDrawer>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/discover/anime">Anime</Link>
              <Link to="/discover/manga">Manga</Link>
              <Link to="/favorites">Favorites</Link>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
