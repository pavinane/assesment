import React, { useEffect, useState } from "react";
import Cards from "../component/cards";
import { useSelector } from "react-redux";

// 1. Fetch the Product Details using fetch method
// 2. get the product using map use to list the products

function ProductList() {
  const [product, setProduct] = useState([]);
  const searchProducts = useSelector(
    (state) => state.searchProduct.searchProduct
  );
  let URL = "https://dummyjson.com/products";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchingProduct = await fetch(URL);
        const Response = await fetchingProduct.json();
        setProduct(Response.products);
        console.log("res", Response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [URL]);

  const filteredUsers = product.filter((user) =>
    `${user.title} ${user.brand}`.toLowerCase().includes(searchProducts)
  );

  return (
    <div className="p-4">
      <div className="row">
        {filteredUsers?.map((item, index) => {
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
}

export default ProductList;
