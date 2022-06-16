import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './alert.actions';

export const userActions = {
  createUser,
  getUsersByCategory
};

function createUser(user, navigate) {
  return dispatch => {
    createUserRequest(dispatch, user);

    userService.createUser(user).then(
      () => {
        createUserSuccess(dispatch, user);
        alertSuccessAction(dispatch, 'User created successfuly');
        navigate('/users');
      },
      error => {
        createUserFailure(dispatch, error.toString());
        alertFailAction(dispatch, error.toString());
      }
    );
  };
}

function getUsersByCategory(category) {
  return dispatch => {
    getUsersByCategoryRequest(dispatch, category);
    userService.getUsersByCategory(category).then(
      usersByCategory => {
        getUsersByCategorySuccess(dispatch, usersByCategory);
        alertSuccessAction(
          dispatch,
          'User by Category ' + category + ' retrieved successfuly'
        );
      },
      error => {
        getUsersByCategoryFailure(dispatch, error.toString());
        alertFailAction(dispatch, error.toString());
      }
    );
  };
}

function createUserRequest(dispatch, user) {
  dispatch({ type: userConstants.CREATE_USER_REQUEST, user });
}
function createUserSuccess(dispatch, user) {
  dispatch({ type: userConstants.CREATE_USER_SUCCESS, payload: user });
}
function createUserFailure(dispatch, error) {
  dispatch({ type: userConstants.CREATE_USER_FAILURE, error });
}

function getUsersByCategoryRequest(dispatch, category) {
  dispatch({ type: userConstants.GET_BY_CATEGORY_REQUEST, category });
}
function getUsersByCategorySuccess(dispatch, usersByCategory) {
  dispatch({ type: userConstants.GET_BY_CATEGORY_SUCCESS, usersByCategory });
}
function getUsersByCategoryFailure(dispatch, error) {
  dispatch({ type: userConstants.GET_BY_CATEGORY_FAILURE, error });
}

function alertSuccessAction(dispatch, message) {
  dispatch(alertActions.success(message));
}

function alertFailAction(dispatch, error) {
  dispatch(alertActions.error(error.toString()));
}
