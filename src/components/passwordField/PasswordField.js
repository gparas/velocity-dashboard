import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '../inputField';
import ToggleIcon from './ToggleIcon';

const PasswordField = ({ disabled, ...other }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const handleButtonMouseDown = e => {
    e.preventDefault();
  };
  return (
    <Input
      {...other}
      type={visible ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            tabIndex={-1}
            onClick={toggleVisibility}
            onMouseDown={handleButtonMouseDown}
            disabled={other.disabled}
          >
            <ToggleIcon on={visible} />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default PasswordField;
