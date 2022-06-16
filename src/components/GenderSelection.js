import { Box } from '@chakra-ui/react';
import React from 'react';
import { HStack, useRadio, useRadioGroup} from '@chakra-ui/react';
import { genders } from '../helpers/constants';
import { useField } from 'formik';
import './style.css';

const GenderSelection = ({ label, ...props }) => {
  const [field, meta, helpers] = useField('gender');
  const { value } = meta;
  const { setValue } = helpers;
  const handleChange = value => {
    setValue(value);
  };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'genderGroup',
    defaultValue: '',
    onChange: handleChange
  });

  const group = getRootProps();

  return (
    <>
      <HStack {...group} marginTop="5" marginBottom="5">
        <label htmlFor={props.id || props.name}>{label}</label>
        {genders.map(value => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio} name={value}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const RadioCard = ({ ...props }) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const radio = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...radio}
        borderRadius="5"
        borderColor="gray.800"
        border="1px solid"
        padding="1"
        color="gray.800"
        backgroundColor="whiteAlpha.800"
        _checked={{
          bg: 'gray.800',
          color: 'white',
          borderColor: 'gray.800',
        }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(255, 255, 255, .15)',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default GenderSelection;
