import React from "react";

function Cards({ thumbnail, title, description, price, rating, brand }) {
  return (
    <div className="card mb-3" style={{ height: "300px" }}>
      <div className="card-body">
        <img
          src={thumbnail}
          alt="product_image"
          className="w-100 img-fluid"
          style={{ height: "150px" }}
        />
        <h5 className="card-title text-danger mt-2">{title}</h5>
        <p className="card-text">{`${description.slice(0, 50)} ... `}</p>
        <div className="d-flex flex-row justify-content-between specification">
          <p className="fw-bolder fs-8 text">Price:$ {price}</p>

          <p className="fw-bolder fs-8 text">Rating: {rating}</p>
          <p className="fw-bolder fs-8 text">
            Brand:
            {`${brand.slice(0, 10)} ... `}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
