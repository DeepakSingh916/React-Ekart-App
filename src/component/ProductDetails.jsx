import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();

  const [prod, setProd] = useState({});

  const [relatedProd, setRelatedProd] = useState([]);

  useEffect(() => {
    const filterItem = items.filter((product) => product.id == id);
    //console.log(filterItem)
    setProd(filterItem[0]);

    const relatedFilterItems = items.filter(
      (p) => p.category === prod.category
    );
    //console.log(relatedFilterItems)
    setRelatedProd(relatedFilterItems);
  }, [id, prod.category]);

  return (
    <>
    
      <div className="conatiner">
        <div className="container my-5" style={{ display: "flex" }}>
          <Link to={`/image/${prod.id}`} className="img-container">
            <img src={prod.imgsrc} alt={prod.title} width="250px" />
          </Link>
          <div className="card-body" style={{ marginLeft: "50px" }}>
            <h3 className="card-title">{prod.title}</h3>
            <p className="card-text" style={{ fontWeight: "500" }}>
              {prod.description}
            </p>
            <button className="btn btn-primary">₹{prod.price}</button>
            <Link to="/" className="btn btn-info mx-3">
              Back
            </Link>
            <button onClick={()=>addToCart(
                            prod.id,
                            prod.title,
                            prod.price,
                            prod.description,
                            prod.imgsrc)} className="btn btn-warning">
              Add to cart
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href={prod.amazonlink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              amazon link
            </a>
          </div>
        </div>
        <h3 className="text-center">Related Products</h3>
        <Product items={relatedProd} addToCart={addToCart}/>
      </div>
    </>
  );
};

export default ProductDetails;
