import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormAlert from './FormAlert';
import FormField from '../../../components/formField';

const Form = ({ fields, onSubmit, ctaLabel, error, isLoading }) => {
  return (
    <Box noValidate onSubmit={onSubmit} component="form" sx={{ my: 2 }}>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <FormAlert error={error} />
        {fields.map(field => (
          <FormField key={field.id} fullWidth required {...field} />
        ))}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={isLoading}
          startIcon={
            isLoading ? <CircularProgress color="inherit" size={24} /> : null
          }
        >
          {ctaLabel}
        </Button>
      </Stack>
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
