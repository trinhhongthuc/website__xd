import types from "../../types.js";

const initState = {
  isLoading: false,
  isError: false,
  dataPost: [],
  isLoadingUpdate: false,
  isLoadingAddPost: false,
};

const postReducerAdmin = (state = initState, action) => {
  switch (action.type) {
    // GET ALL POST ///////
    case types.GET_ALL_POST_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingUpdate: false,
        isLoadingAddPost: false,
      };

    case types.GET_ALL_POST_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataPost: action.payload,
      };

    case types.GET_ALL_POST_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // ADD POST ///////
    case types.ADD_POST_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingUpdate: false,
        isLoadingAddPost: false,
      };

    case types.ADD_POST_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingAddPost: true,
      };

    case types.ADD_POST_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // UPDATE POST ///////
    case types.UPDATE_POST_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingUpdate: false,
      };

    case types.UPDATE_POST_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingUpdate: true,
      };

    case types.UPDATE_POST_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // DELETE POST ///
    case types.DELETE_POST_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingUpdate: false,
      };

    case types.DELETE_POST_ADMIN_SAGA_SUCCESS:
      const newData = state.dataPost.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        isLoading: false,
        isLoadingUpdate: false,

        dataPost: newData,
      };

    case types.DELETE_POST_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default postReducerAdmin;
