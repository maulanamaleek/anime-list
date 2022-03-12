import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const CardSkeleton = () => (
  <Stack margin="auto" spacing={1}>
    <Skeleton
      variant="rectangular"
      width={185}
      height={200}
      sx={{
        borderRadius: 1,
      }}
    />
    <Skeleton variant="text" width={120} />
  </Stack>
);

export default CardSkeleton;
