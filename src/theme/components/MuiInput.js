import { inputClasses } from '@mui/material/Input';
import { alpha } from '@mui/material/styles';

const defaultProps = {
  disableUnderline: true,
};

const styleOverrides = {
  root: ({ theme, ownerState }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['border-color']),
    ...(ownerState.formControl && {
      'label + &': {
        marginTop: 4,
      },
    }),
    [`&.${inputClasses.focused}`]: {
      borderColor: theme.palette[ownerState.color].main,
    },
    [`&.${inputClasses.disabled}`]: {
      borderColor: alpha(
        theme.palette.divider,
        theme.palette.action.disabledOpacity
      ),
    },
    [`&.${inputClasses.error}`]: {
      borderColor: theme.palette.error.main,
    },
  }),
  input: ({ theme }) => ({
    height: 22,
    padding: theme.spacing(1.5, 2),
    fontSize: theme.typography.pxToRem(16),
  }),
};

export default {
  defaultProps,
  styleOverrides,
};
