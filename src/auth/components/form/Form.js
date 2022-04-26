import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Form = ({ fields, onSubmit, ctaLabel }) => {
  return (
    <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
      {fields.map(({ id, type, label }) => {
        return (
          <TextField
            key={id}
            margin="normal"
            required
            fullWidth
            id={id}
            label={label}
            name={id}
            type={type}
          />
        );
      })}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ mt: 2, mb: 2 }}
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
