import { Box } from '@mui/material';
import React from 'react';

interface TagProps {
  content: string;
}

const Tag: React.FC<TagProps> = ({ content }) => (
  <Box
    component="span"
    sx={{
      padding: '5px 10px',
      background: '#ff8500',
      fontSize: 10,
      borderRadius: 2,
    }}
  >
    {content}
  </Box>
);

export default Tag;
