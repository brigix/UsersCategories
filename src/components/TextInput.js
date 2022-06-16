import { React } from 'react';
import { Input } from '@chakra-ui/react';
import { useField } from 'formik';
import { PascalCase } from './../helpers/services';
import './style.css';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Input
        variant="flushed"
        id={props.id}
        name={props.id}
        placeholder={PascalCase(label)}
        padding="5"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
