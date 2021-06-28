import types from "../../types.js";

const initState = {
  isLoading: false,
  isError: false,
  dataPagination: [],
};

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_DATA_PAGINATION:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_DATA_PAGINATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataPagination: action.payload.data,
        totalPage: action.payload.totalPage,
        currentPage: action.payload.currentPage,
      };

    case types.GET_DATA_PAGINATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default courseReducer;
