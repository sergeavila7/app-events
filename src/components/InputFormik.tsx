import { FC, InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import { TextField, FormHelperText } from '@mui/material';

interface InputProps {
  label?: string;
  name: string;
}

const InputFormik: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  name,
}) => {
  const [field, { error, touched }, { setValue }] = useField({
    name,
    type: name,
  });

  const handleFocus = () => {
    setValue('');
  };

  return (
    <div>
      <div>
        <TextField
          {...field}
          fullWidth
          label={label}
          onFocus={handleFocus}
          size='medium'
          color='primary'
        />
      </div>
      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};

export default InputFormik;
