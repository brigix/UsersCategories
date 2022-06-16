import { categoryConstants } from '../constants';

export function categoryCreation(state = { categories: [] }, action) {
  switch (action.type) {
    case categoryConstants.CREATE_REQUEST:
      return {
        ...state,
        creating: true,
      };
    case categoryConstants.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
        creating: false,
      };
    case categoryConstants.CREATE_FAILURE:
      return {
        ...state,
        creating: false,
        error: action.error,
      };
    case categoryConstants.GETALL_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryConstants.GETALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.categories,
      };
    case categoryConstants.GETALL_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
