import React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { useField } from 'formik';
import './style.css';

const CustomNumberInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField("age");
  const { value } = meta;
  const { setValue } = helpers;
  const handleChange = value => {
    setValue(value);
  };

  return (
    <Flex>
      <VStack align="flex-start">
        <label htmlFor={props.id || props.name}>{label}</label>
        <HStack>
          <NumberInput
            size="md"
            maxW="100px"
            mr="2rem"
            defaultValue={props.default}
            min={props.min}
            max={props.max}
            step={1}
            clampValueOnBlur={false}
            onChange={handleChange}
            value={value}
            backgroundColor="whiteAlpha.500"
            color="gray.800"
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
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper _active={{ bg: 'gray.800' }} />
              <NumberDecrementStepper _active={{ bg: 'gray.800' }} />
            </NumberInputStepper>
          </NumberInput>
          <Slider
            flex="1"
            defaultValue={props.defaul}
            min={props.min}
            max={props.max}
            step={1}
            focusThumbOnChange={false}
            value={value}
            onChange={handleChange}
            width="200px"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb
              fontSize="md"
              boxSize="32px"
              color="gray.800"
              children={value}
            />
          </Slider>
        </HStack>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </VStack>
    </Flex>
  );
};

export default CustomNumberInputField;
