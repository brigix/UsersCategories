import { categoryConstants } from '../constants';
import { categoryService } from '../services';
import { alertActions } from './alert.actions';

export const categoryActions = {
  createCategory,
  getAllCategories
};

function createCategory(category, navigate) {
  return dispatch => {
    createCategoryRequest(dispatch, category);

    categoryService.createCategory(category).then(
      () => {
        createCategorySuccess(dispatch, category);
        alertSuccessAction(dispatch, 'category created successfuly');
        navigate('/categories');
      },
      error => {
        createCategoryFailure(dispatch, error.toString());
        alertFailAction(dispatch, error.toString());
      }
    );
  };
}

function getAllCategories() {
  return dispatch => {
    getAllCategoriesRequest(dispatch);

    categoryService.getAllCategories().then(
      categories => {
        getAllCategoriesSucces(dispatch, categories);
        alertSuccessAction(dispatch, 'categories retrieved successfuly');
      },
      error => {
        getAllCategoriesFailure(dispatch, error.toString());
        alertFailAction(dispatch, error.toString());
      }
    );
  };
}

function createCategoryRequest(dispatch, category) {
  dispatch({ type: categoryConstants.CREATE_CATEGORY_REQUEST, category });
}
function createCategorySuccess(dispatch, category) {
  dispatch({ type: categoryConstants.CREATE_CATEGORY_SUCCESS, payload: category });
}
function createCategoryFailure(dispatch, error) {
  dispatch({ type: categoryConstants.CREATE_CATEGORY_FAILURE, error });
}

function getAllCategoriesRequest(dispatch) {
  dispatch({ type: categoryConstants.GETALL_CATEGORY_REQUEST });
}
function getAllCategoriesSucces(dispatch, categories) {
  dispatch({ type: categoryConstants.GETALL_CATEGORY_SUCCESS, categories });
}

function getAllCategoriesFailure(dispatch, error) {
  dispatch({ type: categoryConstants.GETALL_CATEGORY_FAILURE, error });
}

function alertSuccessAction(dispatch, message) {
  dispatch(alertActions.success(message));
}

function alertFailAction(dispatch, error) {
  dispatch(alertActions.error(error.toString()));
}
