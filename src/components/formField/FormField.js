import FormControl from '@mui/material/FormControl';
import PasswordField from '../passwordField';
import HelperText from './HelperText';
import Input from '../inputField';
import Label from './Label';

const FormField = ({
  fullWidth,
  margin,
  label,
  name,
  error,
  required,
  helperText,
  type,
  ...other
}) => {
  const InputComponent = type === 'password' ? PasswordField : Input;
  return (
    <FormControl
      margin={margin}
      fullWidth={fullWidth}
      sx={{ position: 'relative' }}
    >
      <InputComponent
        name={name}
        error={error}
        required={required}
        {...other}
      />
      <Label name={name} error={error}>
        {label}
        {required && '*'}
      </Label>
      {helperText ? <HelperText error={error}>{helperText}</HelperText> : null}
    </FormControl>
  );
};

export default FormField;
