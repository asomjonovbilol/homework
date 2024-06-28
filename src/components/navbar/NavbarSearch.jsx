import React from "react";
import { CARD_IMG } from "../../static";
import { Link } from "react-router-dom";

const NavbarSearch = ({ data, onClose }) => {
  let searchItems = data?.map((el) => (
    <div key={el.id} className="search-items">
      <div className="search-item">
        {CARD_IMG[el.id] ? (
          <img src={CARD_IMG[el.id]?.img} alt="" />
        ) : (
          <img src={el.images[0]} alt="" />
        )}
        <Link onClick={() => onClose()} to={`/products/${el.id}`}>
          <h1>{el.title}</h1>
        </Link>
      </div>
      <h3>${el.price}</h3>
    </div>
  ));
  return (
    <div className="nav-input-result">
      {!data || !data.length ? <h3>Malumot topilmadi</h3> : null}
      {searchItems}
    </div>
  );
};

export default NavbarSearch;
