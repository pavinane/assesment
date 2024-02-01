// reducer
const initialState = {
  user: localStorage.getItem("user") || null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
