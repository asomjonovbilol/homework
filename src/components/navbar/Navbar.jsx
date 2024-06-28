import React, { useEffect, useState } from "react";
import logo from "../../assets/nav-logo.svg";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import "./Navbar.css";
import NavbarSearch from "./NavbarSearch";
import axios from "axios";
import { NavLink } from "react-router-dom";

const API_URL = "https://dummyjson.com/products";

const Navbar = () => {
  const [modul, setModul] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);

  const handleCloseModul = () => {
    setValue("");
    setModul(false);
  };

  useEffect(() => {
    if (!value.trim()) return;
    axios
      .get(`${API_URL}/search?q=${value.trim()}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [value]);
  return (
    <header>
      <nav className="container">
        <div className="nav-all">
          <div className="nav-logo">
            <NavLink to={"/"}>
              <img src={logo} alt="" />
              <h1>Mohid</h1>
            </NavLink>
          </div>
          <div className="nav-center">
            <ul className="nav-list">
              <NavLink to={"/"}>
                <li className="nav-items">Home</li>
              </NavLink>
              <li className="nav-item">Brands</li>
              <li className="nav-item">Recent Products</li>
              <li className="nav-item">Contact</li>
              <li className="nav-item">About</li>
            </ul>
          </div>
          <div className="nav-icons">
            <button onClick={() => setModul(true)}>
              <IoSearch />
            </button>
            <FaUser />
            <IoMdCart />
          </div>
          <div className={`nav-modul ${modul ? "show-modul" : ""}`}>
            <div className="container">
              <div className="nav-modul-all">
                <div className="nav-logo-1">
                  <img src={logo} alt="" />
                  <h1>Mohid</h1>
                </div>
                <div className="nav-input">
                  <div className="nav-input-1">
                    <input
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      type="text"
                      placeholder="Search"
                    />
                    <button>Search</button>
                    <IoSearch />
                  </div>
                  {value.trim() ? <NavbarSearch data={data} /> : <></>}
                </div>
                <div className="nav-modul-cancel">
                  <button onClick={handleCloseModul}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
