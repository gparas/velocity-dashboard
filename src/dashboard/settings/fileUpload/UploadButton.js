import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Input = styled('input')({
  display: 'none',
});

const UploadButton = ({ onChange }) => {
  return (
    <label htmlFor="upload-button">
      <Input accept=".csv" id="upload-button" type="file" onChange={onChange} />
      <Button variant="contained" component="span">
        Upload File
      </Button>
    </label>
  );
};

export default UploadButton;
