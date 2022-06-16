export const validate = values => {
    const errors = {};
    if (!values.category_1) {
      errors.category_1 = 'Required';
    }
    if (!values.subCategory_2) {
      errors.subcategory_2 = 'Required';
    }
    if (!values.subCategory_3) {
      errors.subcategory_3 = 'Required';
    }
    return errors;
  };