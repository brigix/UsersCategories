import { React } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Box, FormControl, Heading, CircularProgress } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import CustomNumberInputField from './../components/CustomNumberInputField';
import GenderSelection from './../components/GenderSelection';
import CategorySelection from './../components/CategorySelection';
import PasswordInput from '../components/PasswordInput';
import * as constant from '../helpers/constants';
import TextInput from './../components/TextInput';
import SaveIcon from './../assets/SaveIcon';
import CustomButton from './../components/CustomButton';
import { User } from './../models/User.js';
import { userActions } from '../redux/actions/user.actions';
import { validate } from '../helpers/userValidation';
import PropTypes from 'prop-types';

const UserRegistration = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createUser = props => {
    const newUser = new User(props);
    dispatch(userActions.createUser(newUser, navigate));
    if (props.creating) {
      return <CircularProgress isIndeterminate color="green.300" />;
    }
  };

  const onSubmit = (values, { setSubmitting }) => {
    createUser(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Box>
      <Heading as="h3" size="lg" noOfLines={1}>
        User Registration
      </Heading>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          password: '',
          age: '',
          gender: '',
          category: '',
        }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {props => (
          <Form>
            <Field name="userRegistration">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  autoComplete="off"
                >
                  <TextInput id="name" name="name" label="User Name" />
                  <TextInput id="surname" name="surname" label="User Surname" />
                  <TextInput id="email" name="email" label="User Email" />
                  <PasswordInput
                    id="password"
                    label="Password"
                    name="password"
                  />
                  <CustomNumberInputField
                    default={constant.defaultAge}
                    min={constant.minAge}
                    max={constant.maxAge}
                    id="age"
                    label="User Age"
                    {...field}
                  />
                  <GenderSelection
                    id="gender"
                    label="User Gender"
                    name="gender"
                  />
                  <CategorySelection
                    id="categorySelection"
                    label="User Category"
                    name="category"
                  />
                </FormControl>
              )}
            </Field>
            <CustomButton title="SAVE">
              <SaveIcon />
            </CustomButton>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
function mapState(state) {
  const { creating, loading, users } = state.userRegistration;
  return { creating, loading, users };
}

const connectedUserRegistration = connect(mapState)(UserRegistration);
export { connectedUserRegistration as UserRegistration };

UserRegistration.propTypes = {
  users: PropTypes.array,
  loading: PropTypes.bool,
  creating: PropTypes.bool,
};
