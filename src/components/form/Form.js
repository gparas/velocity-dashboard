import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '../textField';
import SubmitButton from '../submitButton';
import FormAlert from '../formAlert';

const Form = ({
  onSubmit,
  fields,
  isLoading,
  serverError,
  direction = 'column',
  submitButtonProps,
}) => {
  return (
    <>
      <FormAlert error={serverError} />
      <Box component="form" noValidate onSubmit={onSubmit}>
        <Stack
          spacing={2}
          direction={direction}
          alignItems="flex-start"
          sx={{ mb: 2 }}
        >
          {fields.map(field => (
            <TextField key={field.id} {...field} />
          ))}
        </Stack>
        <SubmitButton isLoading={isLoading} {...submitButtonProps} />
      </Box>
    </>
  );
};

Form.propTypes = {
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  direction: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Form;
