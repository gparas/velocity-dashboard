import React from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '../../icons/Message';

const Message = () => {
  return (
    <IconButton sx={{ mr: 1 }}>
      <Icon fontSize="small" />
    </IconButton>
  );
};

export default Message;
