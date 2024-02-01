import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function ProfileUser() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/productList");
  };
  return (
    <div className="mt-4">
      <p>{user && `Welcome, ${user}!`}</p>
      <button type="button" class="btn btn-secondary" onClick={onSubmit}>
        Product
      </button>
    </div>
  );
}

export default ProfileUser;
