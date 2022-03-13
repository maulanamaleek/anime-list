/* eslint-disable no-unused-vars */
import { Box, useMediaQuery } from '@mui/material';
import React, { ReactChild } from 'react';
import Navbar from '../Navbar/Navbar';

interface Props {
  children: ReactChild | ReactChild[];
}

const Layout = ({ children }: Props) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const year = new Date().getFullYear();
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Navbar />
      <Box sx={{
        flexGrow: 1,
        padding: isMobile ? '10px' : '50px',
        paddingTop: isMobile ? '30px' : '150px',
      }}
      >
        {children}
      </Box>
      <Box
        sx={{
          height: 100,
          mt: 15,
          background: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        component="footer"
      >
        <p>
          AnimeList &nbsp;
          <span>
            {year}
          </span>
          &nbsp;
          | Maulana Malik Y
        </p>
      </Box>
    </Box>
  );
};

export default Layout;
