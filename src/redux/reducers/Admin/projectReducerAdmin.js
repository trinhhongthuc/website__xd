import types from "../../../redux/types.js";

const initState = {
  isLoading: false,
  isError: false,
  dataProject: [],
  detailProject: {},
  isLoadingUpdate: false,
  isLoadingAdd: false,
};

const projectReducerAdmin = (state = initState, action) => {
  switch (action.type) {
    // get all project
    case types.GET_ALL_PROJECT_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingUpdate: false,
        isLoadingAdd: false,
      };

    case types.GET_ALL_PROJECT_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataProject: action.payload,
      };

    case types.GET_ALL_PROJECT_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // add project data

    case types.ADD_PROJECT_ADMIN_SAGA:
      return {
        ...state,
        isLoading: false,
        isLoadingAdd: false,
      };

    case types.ADD_PROJECT_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingAdd: true,
      };

    case types.ADD_PROJECT_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //delete project data

    case types.DELETE_PROJECT_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
      };

    case types.DELETE_PROJECT_ADMIN_SAGA_SUCCESS:
      const newData = state.dataProject.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        isLoading: false,
        dataProject: newData,
      };

    case types.DELETE_PROJECT_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //get one project by id

    case types.DETAIL_PROJECT_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
      };

    case types.DETAIL_PROJECT_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        detailProject: action.payload,
      };

    case types.DETAIL_PROJECT_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // get project update

    case types.UPDATE_PROJECT_ADMIN_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingUpdate: false,
      };

    case types.UPDATE_PROJECT_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingUpdate: true,
      };

    case types.UPDATE_PROJECT_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default projectReducerAdmin;
