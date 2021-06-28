import types from "../../types";

const initState = {
  isLoading: false,
  isError: false,
  dataRegisters: [],
  notifycation: false,
};

const registerCourseReducer = (state = initState, action) => {
  switch (action.type) {
    case types.REGISTER_COURSE:
      return {
        ...state,
        isLoading: true,
        notifycation: false,
      };

    case types.REGISTER_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notifycation: true,
        dataRegisters: action.payload,
      };

    case types.REGISTER_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        notifycation: false,
      };

    case "HIDDEN_NOTIFICATION":
      return {
        ...state,
        notifycation: false,
      };

    default:
      return state;
  }
};

export default registerCourseReducer;
