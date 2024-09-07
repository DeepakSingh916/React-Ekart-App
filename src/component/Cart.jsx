import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Cart = ({ cart, setCart }) => {

  const deleteItem=(data)=>{
    const updatedCart = cart.filter((item)=>item.id !== data);
    setCart(updatedCart);
  }

  return (
    <>
      <div className="conatiner">
        {cart.length == 0 ? (
          <div className="text-center" style={{ marginTop: "30px" }}>
            <h1>Cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              <h4>continue shopping . . . . .</h4>
            </Link>
          </div>
        ) : (
          cart.map((p) => {
            return (
              <div
                className="card mb-3 my-5"
                style={{ width: "700px", marginLeft: "300px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={p.imgsrc}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{p.title}</h5>
                      <p className="card-text">{p.description}</p>
                      <button className="btn btn-primary mx-3">
                        ₹{p.price}
                      </button>
                      <button className="btn btn-warning mx-3">Buy Now</button>
                      <Link to={"/"} className="btn btn-secondary mx-3">
                        Back
                      </Link>
                      <button onClick={()=>deleteItem(p.id)} className="btn btn-danger">
                        <MdDeleteForever />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {cart.length != 0 && (
        <div>
          <div
            className="text-center my-5"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <button className="btn btn-warning mx-3">Checkout</button>
            <button onClick={() => setCart("")} className="btn btn-danger">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
