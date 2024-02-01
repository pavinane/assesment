import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileUser from "./pages/profileUser";
import ProductList from "./pages/productList";
import Login from "./pages/login";
import Header from "./component/header";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/profile" Component={ProfileUser} />
          <Route path="/productList" Component={ProductList} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
