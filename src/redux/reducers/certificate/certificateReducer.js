import types from "../../types";

const initState = {
  isLoading: false,
  isError: false,
  dataCertificates: [],
  hiddenCertificates: false,
  isNotify: false,
};

const certificateReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CERTIFICATE:
      return {
        ...state,
        isLoading: true,
        hiddenCertificates: false,
        isNotify: false,
      };

    case types.CERTIFICATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataCertificates: action.payload,
        hiddenCertificates: true,
        isNotify: false,
      };

    case types.CERTIFICATE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        hiddenCertificates: false,
        isNotify: false,
      };
    case types.CERTIFICATE_SUCCESS_NOTIFY:
      return {
        ...state,
        isLoading: false,
        dataCertificates: [],
        isNotify: true,
      };
    default:
      return state;
  }
};

export default certificateReducer;
