// Example of how

import {
  GET_USER_PROFILE,
  SET_ACCOUNT_TYPE,
  UPDATE_PROFILE,
  FETCH_GROOMER_PROFILE,
  GET_CLIENT_PROFILE,
  GET_GROOMER_SERVICES,
  CREATE_NEW_APPOINTMENT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        user_profile: action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        user_profile: action.payload,
      };
    case SET_ACCOUNT_TYPE:
      return {
        ...state,
        account_type: action.payload,
      };
    case FETCH_GROOMER_PROFILE:
      return {
        ...state,
        groomer_profile: action.payload,
      };
    case GET_CLIENT_PROFILE:
      return {
        ...state,
        client_profile: action.payload,
      };
    case GET_GROOMER_SERVICES:
      return {
        ...state,
        groomer_services: action.payload,
      };
    case CREATE_NEW_APPOINTMENT:
      return {
        ...state,
        client_appointments: action.payload,
      };
    default:
      return state;
  }
};
