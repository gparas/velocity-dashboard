import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '../../../icons';

const PasswordInput = ({ input, disabled }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const handleButtonMouseDown = e => {
    e.preventDefault();
  };

  const inputProps = {
    type: visible ? 'text' : 'password',
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          tabIndex={-1}
          onClick={toggleVisibility}
          onMouseDown={handleButtonMouseDown}
          disabled={disabled}
        >
          {on ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return React.cloneElement(input, inputProps);
};

export default PasswordInput;
