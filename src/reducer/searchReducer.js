// reducer
const initialState = {
  searchProduct: "",
};

const searchProdcutreducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      return {
        ...state,
        searchProduct: action.payload,
      };
    default:
      return state;
  }
};

export default searchProdcutreducer;
