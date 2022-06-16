import React from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { useField } from 'formik';
import './style.css';

const PasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <InputGroup size="md">
        <Input
          variant="flushed"
          type={show ? 'text' : 'password'}
          placeholder="Password"
          autoComplete="new-password"
          id="password"
          name="password"
          {...field}
          {...props}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default PasswordInput;
