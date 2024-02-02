import React from "react";
import { connect } from "react-redux";
import { setSearchProduct } from "../action/userAction";

const SearchBar = ({ searchTerm, setSearchProduct }) => {
  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          aria-label="Search"
          placeholder="Search by product "
          value={searchTerm}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchProduct.searchTerm,
});

const mapDispatchToProps = {
  setSearchProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
