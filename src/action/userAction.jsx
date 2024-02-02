// actions
export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setSearchProduct = (searchProduct) => ({
  type: "SEARCH_PRODUCT",
  payload: searchProduct,
});

export const setProductList = (products) => ({
  type: "SET_PRODUCT_LIST",
  payload: products,
});
