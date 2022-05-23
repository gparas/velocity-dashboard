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
  hidden,
  ...other
}) => {
  const InputComponent = type === 'password' ? PasswordField : Input;
  return (
    <FormControl
      margin={margin}
      fullWidth={fullWidth}
      sx={{ position: 'relative', display: hidden ? 'none' : 'inline-flex' }}
    >
      <InputComponent type={type} error={error} {...other} />
      {label ? (
        <Label name={name} error={error}>
          {label}
          {required && '*'}
        </Label>
      ) : null}
      {helperText ? <HelperText error={error}>{helperText}</HelperText> : null}
    </FormControl>
  );
};

export default FormField;
