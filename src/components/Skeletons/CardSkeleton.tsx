import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const CardSkeleton = () => (
  <Stack className="skeleton-card" margin="auto" spacing={1}>
    <Skeleton
      variant="rectangular"
      style={{
        width: '100%',
        height: '200px',
      }}
      sx={{
        borderRadius: 1,
      }}
    />
    <Skeleton variant="text" width={120} />
  </Stack>
);

export default CardSkeleton;
