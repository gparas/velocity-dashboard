import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormAlert from './FormAlert';

const Form = ({ fields, onSubmit, ctaLabel, error, isLoading }) => {
  return (
    <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
      <FormAlert error={error} />
      {fields.map(field => (
        <TextField key={field.id} {...field} />
      ))}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        disabled={isLoading}
        sx={{ mt: 2, mb: 2 }}
        startIcon={
          isLoading ? <CircularProgress color="inherit" size={24} /> : null
        }
      >
        {ctaLabel}
      </Button>
    </Box>
  );
};

Form.propTypes = {
  ctaLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Form;
