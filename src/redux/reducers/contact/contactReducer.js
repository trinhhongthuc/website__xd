import types from "../../types";

const initState = {
  isLoading: false,
  isError: false,
  dataContact: [],
  notifycation: false,
};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CONTACT_FROM:
      return {
        ...state,
        isLoading: true,
        notifycation: false,
      };

    case types.CONTACT_FROM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notifycation: true,
        dataContact: action.payload,
      };

    case types.CONTACT_FROM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default contactReducer;
