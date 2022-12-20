import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

function Cart() {
  const { state, dispatch } = useContext(Context);
  const { cart } = state;
  console.log(cart);
  return (
    <div className="flex flex-col gap-4 justify-center mt-10 pl-10">
      {Object.keys(cart).map((item) => (
        <div key={item} className="flex gap-6 items-center">
          <span>
            <img
              src={cart[item].img}
              alt="furniture"
              className="w-[100px] h-[100px]"
            />
          </span>
          <span className="">{cart[item].name}</span>
          <span className="">RP{cart[item].price}</span>
          <div className="flex items-center gap-4 ">
            <button
            className="px-3 py-1 bg-[#EB455F] ml-4 flex justify-center items-center rounded shadow-xl"
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
          className="bg-yellow-500 px-3 py-1 ml-10  rounded shadow-xl"
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: cart[item] });
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <Link to='/checkout'>
        <button className="bg-black text-white py-2 px-8">
          Go to checkout
        </button>
      </Link>
    </div>
  );
}

export default Cart;
