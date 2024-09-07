import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { items } from "./Data";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({ setData, cart }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const [searchItem, setSearchItem] = useState("");

  const filterByCategory = (data) => {
    const element = items.filter((ele) => ele.category === data);
    setData(element);
  };

  const filterByPrice = (data) => {
    const element = items.filter((item) => {
      const itemPrice = parseInt(item.price.replace(/,/g, ""));
      return itemPrice <= data;
    });
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchItem}`);
    setSearchItem("");
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Kart
          </Link>

          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Products"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </form>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaCartShopping />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {location.pathname === "/" && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter By {"->"}</div>
            <Link onClick={() => setData(items)} className="items">
              No Filter
            </Link>
            <Link className="items" onClick={() => filterByCategory("mobiles")}>
              Mobiles
            </Link>
            <Link className="items" onClick={() => filterByCategory("laptops")}>
              Laptops
            </Link>
            <Link className="items" onClick={() => filterByCategory("tablets")}>
              Tablets
            </Link>
            <Link className="items" onClick={() => filterByPrice("15000")}>
              {"<="}15000
            </Link>
            <Link className="items" onClick={() => filterByPrice("20000")}>
              {"<="}20000
            </Link>
            <Link className="items" onClick={() => filterByPrice("35000")}>
              {"<="}35000
            </Link>
            <Link className="items" onClick={() => filterByPrice("60000")}>
              {"<="}60000
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
