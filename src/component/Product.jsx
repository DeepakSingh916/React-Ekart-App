import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, addToCart }) => {
//   const addToCart = (id, title, price, description, imgsrc) => {
//     const obj = {
//       id,
//       title,
//       price,
//       description,
//       imgsrc,
//     };
//     setCart([...cart, obj]);
//     toast.success('item added to cart', {
//         position: "top-center",
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         });
//   };

  return (
    <>
    
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 my-3 text-center">
                  <div
                    className="card"
                    style={{ width: "18rem", height: "33rem" }}
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.imgsrc}
                        width="250px"
                        height="250px"
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <h3 className="card-title">{product.title}</h3>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        ₹{product.price}
                      </button>
                      {/* &nbsp;&nbsp; */}
                      <button
                        className="btn btn-warning"
                        onClick={() =>
                          addToCart(
                            product.id,
                            product.title,
                            product.price,
                            product.description,
                            product.imgsrc
                          )
                        }
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
