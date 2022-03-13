import { Box } from '@mui/material';
import React from 'react';
import CardSkeleton from './CardSkeleton';

const useSkeleton = () => {
  const loadSkeletonCard = (amount: number) => (
    <Box className="grid-card-fit">
      {[...Array(amount).keys()].map((el) => <CardSkeleton key={el} />)}
    </Box>
  );

  return {
    loadSkeletonCard,
  };
};

export default useSkeleton;
