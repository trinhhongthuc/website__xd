import types from "../../types";

const initState = {
  isLoading: false,
  isError: false,
  dataCertificatesAdmin: [],
  isLoadingAdd: false,
};

const certificateReducerAdmin = (state = initState, action) => {
  switch (action.type) {
    case types.CERTIFICATE__ADMIN:
      return {
        ...state,
        isLoading: true,
        isLoadingAdd: false,
      };
    case types.CERTIFICATE__ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataCertificatesAdmin: action.payload,
      };
    case types.CERTIFICATE__ADMIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.CERTIFICATE__ADMIN_ADD:
      return {
        ...state,
        isLoading: true,
        isLoadingAdd: false,
      };
    case types.CERTIFICATE__ADMIN_ADD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadingAdd: true,
        dataCertificatesAdmin: [...state.dataCertificatesAdmin, action.payload],
      };
    case types.CERTIFICATE__ADMIN_ADD_FAILURE:
      return {
        ...state,
        isLoading: true,
        isLoadingAdd: false,
      };

    case types.CERTIFICATE__ADMIN_DELETE:
      return {
        ...state,
        isLoading: true,
        isLoadingAdd: false,
      };
    case types.CERTIFICATE__ADMIN_DELETE_SUCCESS:
      const newData = state.dataCertificatesAdmin.filter(
        (item) => item._id !== action.payload
      );
      console.log(newData);
      return {
        ...state,
        isLoading: false,
        dataCertificatesAdmin: newData,
      };
    case types.CERTIFICATE__ADMIN_DELETE_FAILURE:
      return {
        ...state,
        isLoading: true,
        isLoadingAdd: false,
      };

    default:
      return state;
  }
};

export default certificateReducerAdmin;
