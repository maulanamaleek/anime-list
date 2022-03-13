/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface Props {
  label: string;
  option?: Array<{ label: string, value: string }>;
  value: { label: string, value: string };
  onChange: Function;
}

const SelectBox: React.FC<Props> = ({
  label, option, value, onChange,
}) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
  }}
  >
    <Typography>{label}</Typography>
    <Autocomplete
      disablePortal
      value={value}
      getOptionLabel={(option) => option.label || ''}
      onChange={(e, value) => onChange({ label: value?.label, value: value?.value })}
      id="combo-box-demo"
      options={option || []}
      sx={{ height: 32, padding: 0 }}
      renderInput={(params) => <TextField sx={{ padding: 0 }} {...params} variant="outlined" />}
    />
  </Box>
);

SelectBox.defaultProps = {
  option: [],
};

export default SelectBox;
