const { default: types } = require("redux/types");

const initState = {
  isLoading: false,
  isError: "",
  dataRecruit: [],
};

const RecruitReducerAdmin = (state = initState, action) => {
  switch (action.type) {
    case types.GET_ALL_RECRUIT:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_ALL_RECRUIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataRecruit: action.payload,
      };

    case types.GET_ALL_RECRUIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // delete Recruit

    case types.DELETE_RECRUIT:
      return {
        ...state,
        isLoading: true,
      };

    case types.DELETE_RECRUIT_SUCCESS:
      const newData = state.dataRecruit.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        isLoading: false,
        dataRecruit: newData,
      };

    case types.DELETE_RECRUIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default RecruitReducerAdmin;
