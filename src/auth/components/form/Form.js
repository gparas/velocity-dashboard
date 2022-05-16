import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import FormAlert from './FormAlert';
import FormField from '../../../components/formField';

const Form = ({ fields, onSubmit, ctaLabel, error, isLoading }) => {
  return (
    <form noValidate onSubmit={onSubmit}>
      <FormAlert error={error} />
      {fields.map(field => (
        <FormField key={field.id} {...field} />
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
    </form>
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
