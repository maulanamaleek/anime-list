// import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';
import CardSkeleton from './CardSkeleton';

// const Card = styled.div`
//   display: block;
//   width: 185px;
//   margin: auto;
//   border-radius: 5px;
//   position: relative;
// `;

const useSkeleton = () => {
  const loadSkeletonCard = (amount: number) => (
    <Box
      className="grid-card-fit"
    >
      {[...Array(amount).keys()].map((el) => <CardSkeleton key={el} />)}
    </Box>
  );

  return {
    loadSkeletonCard,
  };
};

export default useSkeleton;
