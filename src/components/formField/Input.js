import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Input = styled(InputBase)(({ theme }) => ({
  '&': {
    marginTop: theme.spacing(2.5),
  },
  '& .MuiInputBase-input': {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    height: 22,
    padding: theme.spacing(1.5, 2),
    transition: theme.transitions.create(['border-color', 'background-color']),
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
  '&.Mui-focused + label': {
    color: theme.palette.primary.main,
  },
  '&.Mui-error + label': {
    color: theme.palette.error.main,
  },
  '&.Mui-error .MuiInputBase-input': {
    borderColor: theme.palette.error.main,
  },
  '&.Mui-disabled .MuiInputBase-input': {
    backgroundColor: alpha(theme.palette.divider, 0.3),
  },
}));

export default Input;