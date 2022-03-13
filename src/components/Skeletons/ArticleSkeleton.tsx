import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box, useMediaQuery } from '@mui/material';

const ArticleSkeleton = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '50px',
        columnGap: '50px',
      }}
    >
      {!isMobile && (
        <Skeleton
          variant="rectangular"
          width={185}
          height={200}
          sx={{
            borderRadius: 1,
          }}
        />
      )}
      <Stack
        spacing={1}
        sx={{
          margin: isMobile ? 'auto' : 'initial',
        }}
      >
        <Skeleton
          sx={{
            mb: 1,
            margin: isMobile ? 'auto' : 'initial',
          }}
          variant="text"
          width={isMobile ? 100 : 120}
        />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton
          variant="text"
          sx={{
            margin: isMobile ? 'auto' : 'initial',
          }}
          width={isMobile ? 200 : 700}
        />
      </Stack>
    </Box>
  );
};

export default ArticleSkeleton;
