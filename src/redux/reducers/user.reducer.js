import { userConstants } from '../constants';

export function userRegistration(
  state = { users: [], usersByCategory: [] },
  action
) {
  switch (action.type) {
    case userConstants.CREATE_USER_REQUEST:
      return {
        ...state,
        creating: true,
      };
    case userConstants.CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        creating: false,
      };
    case userConstants.CREATE_USER_FAILURE:
      return {
        ...state,
        creating: false,
        error: action.error,
      };
    case userConstants.GET_BY_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.GET_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        usersByCategory: action.usersByCategory,
      };
    case userConstants.GET_BY_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
