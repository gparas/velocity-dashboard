import React from 'react';
import { Visibility, VisibilityOff } from '../../icons';

const ToggleIcon = ({ on }) => (on ? <Visibility /> : <VisibilityOff />);

export default ToggleIcon;
