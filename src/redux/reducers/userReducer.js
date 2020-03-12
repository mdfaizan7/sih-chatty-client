import {
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_HANDLE
} from "../types";

const initialState = {
  authenticated: false,
  credentials: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };

    case LOADING_USER:
      return {
        ...state,
        loading: true
      };

    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false
      };

    case SET_HANDLE:
      return {
        ...state,
        credentials: action.payload
      };

    default:
      return state;
  }
}
