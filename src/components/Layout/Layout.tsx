import { Box, useMediaQuery } from '@mui/material';
import React, { ReactChild } from 'react';
import Navbar from '../Navbar/Navbar';

interface Props {
  children: ReactChild | ReactChild[];
}

const Layout = ({ children }: Props) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Navbar />
      <Box sx={{
        margin: 'auto',
        paddingTop: '150px',
        width: isMobile ? '100%' : '80%',
      }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
