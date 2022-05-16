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
  helperText,
  ...other
}) => {
  return (
    <FormControl
      margin={margin}
      fullWidth={fullWidth}
      sx={{ position: 'relative' }}
    >
      <Input name={name} error={error} {...other} />
      <Label name={name} error={error}>
        {label}
      </Label>
      {helperText ? <HelperText error={error}>{helperText}</HelperText> : null}
    </FormControl>
  );
};

export default FormField;
