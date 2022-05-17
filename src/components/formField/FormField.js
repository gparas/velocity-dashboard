import FormControl from '@mui/material/FormControl';
import HelperText from './HelperText';
import Input from './Input';
import Label from './Label';

const FormField = ({
  fullWidth,
  margin,
  label,
  name,
  error,
  required,
  helperText,
  ...other
}) => {
  return (
    <FormControl
      margin={margin}
      fullWidth={fullWidth}
      sx={{ position: 'relative' }}
    >
      <Input name={name} error={error} required={required} {...other} />
      <Label name={name} error={error}>
        {label}
        {required && '*'}
      </Label>
      {helperText ? <HelperText error={error}>{helperText}</HelperText> : null}
    </FormControl>
  );
};

export default FormField;
