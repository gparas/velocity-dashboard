import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import Input from '@mui/material/Input';

import PasswordInput from './passwordInput';

const TextField = ({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  select,
  helperText,
  children,
  inputProps,
  ...other
}) => {
  const InputComponent = (
    <Input
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      {...inputProps}
    />
  );
  return (
    <FormControl variant="standard" {...other}>
      {label != null && label !== '' && (
        <FormLabel htmlFor={id}>{label}</FormLabel>
      )}
      {select ? (
        <Select id={id} input={InputComponent}>
          {children}
        </Select>
      ) : type === 'password' ? (
        <PasswordInput input={InputComponent} />
      ) : (
        InputComponent
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default TextField;
