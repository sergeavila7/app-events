import { FC, ReactNode, TextareaHTMLAttributes } from 'react';
import { useField } from 'formik';
import { TextField, FormHelperText } from '@mui/material';

interface ITextAreaProps {
  label?: string | ReactNode;
  name: string;
}

export const TextAreaFormik: FC<
  ITextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ label, name }) => {
  const [field, { error, touched }, { setValue }] = useField({
    name,
    type: 'textarea',
  });

  const handleFocus = () => {
    setValue('');
  };

  return (
    <div>
      <TextField
        {...field}
        fullWidth
        label={label}
        onFocus={handleFocus}
        multiline
        color='primary'
        variant='outlined'
      />
      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </div>
  );
};
