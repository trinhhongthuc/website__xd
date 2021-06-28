import types from "../../types";

const initState = {
  isLoading: true,
  isError: false,
  dataSlider: [],
  isLoadingAdd: false,
};

const slideReducerAdmin = (state = initState, action) => {
  switch (action.type) {
    //get slide
    case types.SLIDE_ADMIN_SAGA:
      return {
        ...state,
        isLoadingAdd: false,
        isLoading: true,
      };

    case types.SLIDE_ADMIN_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataSlider: action.payload,
      };

    case types.SLIDE_ADMIN_SAGA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    //delete slide

    case types.SLIDE_ADMIN_DELETE_SAGA:
      return {
        ...state,
        isLoading: true,
      };

    case types.SLIDE_ADMIN_DELETE_SAGA_SUCCESS:
      console.log(state);
      const data = state.dataSlider.filter(
        (item) => item._id !== action.payload
      );
      console.log();
      return {
        ...state,
        isLoading: false,
        dataSlider: data,
      };

    case types.SLIDE_ADMIN_DELETE_SAGA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    /// add slide

    case types.SLIDE_ADMIN_ADD_SAGA:
      return {
        ...state,
        isLoading: true,
        isLoadingAdd: false,
      };

    case types.SLIDE_ADMIN_ADD_SAGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingAdd: true,
      };

    case types.SLIDE_ADMIN_ADD_SAGA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default slideReducerAdmin;
