import types from "../../types";

const initState = {
  isLoading: false,
  isError: false,
  dataCourse: [],
  isLoadingUpdate: false,
  isLoadingAdd: false,
};

const courseReducerAdmin = (state = initState, action) => {
  switch (action.type) {
    // get all course
    case types.COURSE_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingUpdate: false,
        isLoadingAdd: false,
      };

    case types.COURSE_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataCourse: action.payload,
      };
    case types.COURSE_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // add course

    case types.COURSE_ADMIN_ADD_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingAdd: false,
      };

    case types.COURSE_ADMIN_ADD_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingAdd: true,
      };

    case types.COURSE_ADMIN_ADD_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // delete course

    case types.COURSE_ADMIN_DELETE_SAGA:
      return {
        ...state,
        isLoading: true,
      };

    case types.COURSE_ADMIN_DELETE_SAGA_SUCCESS:
      const dataFilter = state.dataCourse.filter((item) => {
        return item._id !== action.payload;
      });
      console.log(dataFilter);
      return {
        ...state,
        dataCourse: dataFilter,
        isLoading: false,
      };
    case types.COURSE_ADMIN_DELETE_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // get one course

    ////// get one data update

    case "GET_DATA_UPDATE":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_DATA_UPDATE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        dataCourseDetail: action.payload,
      };

    // update course
    case types.COURSE_ADMIN_UPDATE_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingUpdate: false,
      };

    case types.COURSE_ADMIN_UPDATE_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingUpdate: true,
      };

    case types.COURSE_ADMIN_UPDATE_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default courseReducerAdmin;
