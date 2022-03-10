/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// makeStyles

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

const useStyles = makeStyles(() => ({
  inputRoot: {
    color: 'blue',
    fontFamily: 'Roboto Mono',
    padding: '0px',
  },
}));

interface Props {
  label: string
}

const SelectBox = ({ label }: Props) => {
  const classes = useStyles();
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Typography>{label}</Typography>
      <Autocomplete
        disablePortal
        classes={classes}
        id="combo-box-demo"
        options={top100Films}
        sx={{ height: 32, padding: 0 }}
        renderInput={(params) => <TextField sx={{ padding: 0 }} {...params} variant="outlined" />}
      />
    </Box>
  );
};

export default SelectBox;
