import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cards from "../component/cards";
import { setProductList } from "../action/userAction";

// // 1. Fetch the Product Details using fetch method
// // 2. get the product using map use to list the products

const ProductList = ({ productList, setProductList, searchTerm }) => {
  // Simulate fetching products from an API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts();

      console.log(fetchedProducts, "products");
      const filteredProducts = fetchedProducts?.products.filter((user) =>
        `${user.title} ${user.brand}`.toLowerCase().includes(searchTerm)
      );

      setProductList(filteredProducts);
    };

    fetchData();
  }, [searchTerm, setProductList]);

  return (
    <div>
      <h2>Product List</h2>
      {/* Display productList */}
      <div className="row">
        {productList.map((item, index) => {
          return (
            <div className="col-sm-4 mb-3 mb-sm-0">
              <Cards
                key={index}
                thumbnail={item.thumbnail}
                title={item.title}
                description={item.description}
                price={item.price}
                rating={item.rating}
                brand={item.brand}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productList: state.searchProduct.productList,
  searchTerm: state.searchProduct.searchTerm,
});

const mapDispatchToProps = {
  setProductList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
