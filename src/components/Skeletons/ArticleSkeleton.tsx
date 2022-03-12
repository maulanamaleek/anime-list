import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const ArticleSkeleton = () => (
  <Box
    sx={{
      display: 'flex',
      padding: '50px',
      columnGap: '50px',
    }}
  >
    <Skeleton
      variant="rectangular"
      width={185}
      height={200}
      sx={{
        borderRadius: 1,
      }}
    />
    <Stack spacing={1}>
      <Skeleton
        sx={{
          mb: 1,
        }}
        variant="text"
        width={120}
      />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width={700} />
    </Stack>
  </Box>
);

export default ArticleSkeleton;
