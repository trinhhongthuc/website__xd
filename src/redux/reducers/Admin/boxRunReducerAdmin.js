import types from "../../types";

const initState = {
  isLoading: true,
  isError: false,
  dataBoxRun: [],
  isLoadingAdd: false,
  isLoadingUpdate: false,
};

const boxRunReducerAdmin = (state = initState, action) => {
  switch (action.type) {
    /// GET ALL BOX RUN
    case types.GET_ALL_BOX_RUN_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingAdd: false,
        isLoadingUpdate: false,
      };

    case types.GET_ALL_BOX_RUN_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataBoxRun: action.payload,
      };

    case types.GET_ALL_BOX_RUN_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    /// ADD BOX RUN

    case types.ADD_BOX_RUN_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingAdd: false,
      };

    case types.ADD_BOX_RUN_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingAdd: true,
      };

    case types.ADD_BOX_RUN_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLoadingAdd: false,
      };

    /// DELETE BOX RUN

    case types.DELETE_BOX_RUN_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingAdd: false,
      };

    case types.DELETE_BOX_RUN_ADMIN_SAGA_SUCCESS:
      const dataFilter = state.dataCourse.filter((item) => {
        return item._id !== action.payload;
      });
      return {
        ...state,
        isLoading: false,
        isLoadingAdd: false,
        dataBoxRun: dataFilter,
      };

    case types.DELETE_BOX_RUN_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLoadingAdd: false,
      };

    /// UPDATE BOX RUN

    case types.UPDATE_BOX_RUN_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingUpdate: false,
      };

    case types.UPDATE_BOX_RUN_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingUpdate: true,
      };

    case types.UPDATE_BOX_RUN_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoadingUpdate: false,

        isError: true,
      };
    default:
      return state;
  }
};

export default boxRunReducerAdmin;
