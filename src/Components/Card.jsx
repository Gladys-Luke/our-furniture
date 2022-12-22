import React, {useContext} from "react";
import { Context } from "../context/Context";


function Card({product}) {
  const {dispatch} = useContext(Context);
  return (
    <div>
      <div className="w-[100%] group relative hover:flex hover:items-center hover:justify-center ">
        <button
          onClick={() => {dispatch({type: "ADD_TO_CART", payload: product})}}
          className="z-10 cursor-pointer hidden  group-hover:block  absolute bg-white py-2 px-8 text-[#E89F71] font-bold cursor-pointer active:shadow-md active:px-5 active:rounded-lg"
        >
          Add to cart
        </button>
        <div className="hover:bg-[#3a3a3a]">
          <div className="top">
            <img
              src={product.img}
              alt=""
              className=" w-full hover:mix-blend-overlay hover:opacity-[0.72] "
            />
          </div>
          <div className="p-3 pb-6">
            <h2 className="font-bold text-xl text-gray-700">{product.name}</h2>
            <p className="text-gray-500">{product.type}</p>
            <div className="flex gap-4">
              <p className="font-bold text-gray-700">RP{product.price} </p>
              <span className="text-[#B0B0B0]">
                <s>{product.old}</s>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
