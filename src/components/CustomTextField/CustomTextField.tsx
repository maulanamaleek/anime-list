import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';

const CustomTextField = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography>Search</Typography>
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #eeeeee',
      borderRadius: 2,
      padding: '5px 12px',
    }}
    >
      <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField
        InputProps={{ disableUnderline: true }}
        id="input-with-sx"
        variant="standard"
      />
    </Box>
  </Box>
);

export default CustomTextField;
