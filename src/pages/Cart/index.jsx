import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

function Cart() {
  const { state, dispatch } = useContext(Context);
  const { cart } = state;

  // console.log(cart);

  const totalPrice = () => {
    let total = 0;
    for (const item of Object.keys(cart)) {
      total += cart[item].price * cart[item].qty
    }
    return total
  }
  console.log(totalPrice());
  return (
    <div className="flex flex-col gap-4 justify-center ">
     <div className="py-3  bg-[#E89F71]">
        <div className="container flex gap-4 ">
          <Link to="/">
            <h6 className="text-[#fff] no-underline">Home</h6>
          </Link>
        </div>
      </div>
      {Object.keys(cart).map((item, idx) => (
        <div key={idx} className="flex gap-6 items-center">
          <span>
            <img
              src={cart[item].img}
              alt="furniture"
              className="w-[100px] h-[100px]"
            />
          </span>
          <span className="w-[100px]">{cart[item].name}</span>
          <span className="w-[100px]">RP{cart[item].price}</span>
          <div className="flex items-center gap-4 width-[20px] ">
            <button
              className="px-3 py-1 bg-[#EB455F] ml-4 flex justify-center items-center rounded shadow-xl width-[20px]"
              onClick={() => {
                dispatch({ type: "SUBTRACT_FROM_CART", payload: cart[item] });
              }}
            >
              -
            </button>
            <span className="ml-4">{cart[item].qty}</span>
            <button
              className="px-3 py-1 bg-[#EB455F] ml-4 flex justify-center items-center rounded shadow-xl"
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: cart[item] });
              }}
            >
              +
            </button>
          </div>
          <button
            className="bg-yellow-500 px-3 py-1 ml-10  rounded shadow-xl width-[20px]"
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: cart[item] });
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <div className="col-md-8"></div>
      <div className="col-md-4">
        <div className="card card-body mt-3">
          <h4>
            Sub Total:
            <span className=" pl-10">{totalPrice()}</span>
          </h4>
          <h4>
            Grand Total:
            <span className=" pl-10">{totalPrice()}</span>
          </h4>
          <hr />
          <Link to="/checkout">
            <button className="bg-black text-white py-2 px-8">
              Go to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
