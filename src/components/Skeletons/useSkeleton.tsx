import { Box } from '@mui/material';
import React from 'react';
import CardSkeleton from './CardSkeleton';

const useSkeleton = () => {
  const loadSkeletonCard = (amount: number) => (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      justifyContent: 'space-between',
      rowGap: '30px',
      columnGap: '30px',
      mt: '30px',
    }}
    >
      {[...Array(amount).keys()].map((el) => <CardSkeleton key={el} />)}
    </Box>
  );

  return {
    loadSkeletonCard,
  };
};

export default useSkeleton;
