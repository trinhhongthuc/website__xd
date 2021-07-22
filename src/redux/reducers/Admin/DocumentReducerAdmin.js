import types from "redux/types";

const initState = {
  isLoading: false,
  isError: "",
  dataDocument: [],
};

const DocumentReducerAdmin = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ALL_DOCUMENT:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_ALL_DOCUMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataDocument: action.payload,
      };

    case types.GET_ALL_DOCUMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    case types.DELETE_DOCUMENT:
      return {
        ...state,
        isLoading: true,
      };

    case types.DELETE_DOCUMENT_SUCCESS:
      const newData = state.dataDocument.filter((item) => {
        return item._id !== action.payload;
      });
      return {
        ...state,
        isLoading: false,
        dataDocument: newData,
      };

    case types.DELETE_DOCUMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default DocumentReducerAdmin;
