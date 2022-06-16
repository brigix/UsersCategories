import { React } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Box, Heading, FormControl, CircularProgress } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import TextInput from '../components/TextInput';
import SaveIcon from '../assets/SaveIcon';
import CustomButton from '../components/CustomButton';
import { validate } from '../helpers/categoryValidation';
import { Category } from '../models/Category';
import { categoryActions } from '../redux/actions/category.actions';
import PropTypes from 'prop-types';

const CategoryCreation = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createCategory = props => {
    const newCategory = new Category(props);
    dispatch(categoryActions.createCategory(newCategory, navigate));
    if (props.creating) {
      return <CircularProgress isIndeterminate color="green.300" />;
    }
  };

  const onSubmit = (values, { setSubmitting }) => {
    createCategory(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Box>
      <Heading as="h3" size="lg" noOfLines={1}>
        Category creation
      </Heading>
      <Formik
        initialValues={{
          category_1: '',
          subCategory_2: '',
          subCategory_3: '',
        }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {props => (
          <Form>
            <Field name="categoryCreation">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  autoComplete="off"
                >
                  <TextInput
                    id="category_1"
                    name="category_1"
                    label="Category"
                  />
                  <TextInput
                    id="subCategory_2"
                    name="subCategory_2"
                    label="Sub Category"
                    marginLeft="10"
                  />
                  <TextInput
                    id="subCategory_3"
                    name="subCategory_3"
                    label="Sub Sub Category"
                    marginLeft="20"
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
  const { creating, loading, categories } = state.categoryCreation;
  return { creating, loading, categories };
}

const connectedCategoryCreation = connect(mapState)(CategoryCreation);
export { connectedCategoryCreation as CategoryCreation };

CategoryCreation.propTypes = {
  categories: PropTypes.array,
  loading: PropTypes.bool,
  creating: PropTypes.bool,
};
