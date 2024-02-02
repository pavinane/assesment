// reducer
const initialState = {
  searchTerm: "",
  productList: [],
};

const searchProdcutreducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};

export default searchProdcutreducer;
