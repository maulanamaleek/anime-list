import { Box } from '@mui/material';
import React from 'react';

interface TagProps {
  content: string;
}

const Tag: React.FC<TagProps> = ({ content }) => (
  <Box
    component="span"
    sx={{
      padding: '2px 5px',
      background: 'lightGreen',
      fontSize: 8,
      borderRadius: 2,
    }}
  >
    {content}
  </Box>
);

export default Tag;
