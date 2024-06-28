import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CARD_IMG } from "../../static";
import "./Single.css";
import rating from "../../assets/rating.svg";

const API_URL = "https://dummyjson.com/products/";

const Single = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="single">
      <div className="container">
        <div className="single-all">
          <div className="single-left">
            {product && product.id && CARD_IMG[product.id] ? (
              <img src={CARD_IMG[product.id]?.img} alt="" />
            ) : (
              product &&
              product.images &&
              product.images.length > 0 && (
                <img src={product.images[0]} alt="" />
              )
            )}
          </div>
          <div className="single-right">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <hr />
            <div className="single-rating">
              <p>Rating: </p>
              <img src={rating} alt="" />
              <p>(592)</p>
            </div>
            <div className="single-price">
              <p>Price: </p>
              <h4>${product.price * 2}</h4>
              <h3>${product.price}</h3>
            </div>
            <button>Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
