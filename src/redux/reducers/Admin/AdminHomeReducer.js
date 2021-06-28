import types from "../../types";

const initState = {
  isLoading: false,
  dataAdminHome: [],
};

const AdminHomeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ALL_REGISTER_COURSE:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALL_REGISTER_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataAdminHome: action.payload,
      };
    case types.GET_ALL_REGISTER_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case types.REGISTER_COURSE_DELETE:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTER_COURSE_DELETE_SUCCESS:
      const newData = state.dataAdminHome.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        isLoading: false,
        dataAdminHome: newData,
      };
    case types.REGISTER_COURSE_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default AdminHomeReducer;
