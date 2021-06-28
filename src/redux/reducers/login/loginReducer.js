const { default: types } = require("redux/types");

const initState = {
  isLoading: false,
  dataLogin: {},
  error: "",
  isLogin: false,
  isChangePassword: false,
  iShowModel: false,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoading: true,
        isLogin: false,
        error: "",
      };
    case types.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        dataLogin: action.payload.username,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: action.payload,
      };
    //////////////////////////// CHang pas ửod
    case types.CHANGE_PASSWORD:
      return {
        ...state,
        isChangePassword: true,
        iShowModel: false,
      };
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isChangePassword: false,
        iShowModel: true,
      };
    case types.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isChangePassword: false,
        iShowModel: false,
      };
    /////////// end
    case types.REFRESH_TOKEN:
      return {
        ...state,
        isLoading: true,
      };
    case types.REFRESH_TOKEN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        isLoading: false,
      };
    case types.REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
