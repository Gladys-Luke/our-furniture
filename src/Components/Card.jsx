import React from "react";

function Card(props) {
  return (
    <div>
      <div className="w-[100%] group relative hover:flex hover:items-center hover:justify-center ">
        <button className=" hidden  group-hover:block  absolute bg-white py-2 px-8 text-[#E89F71] font-bold cursor-pointer">
          Add to cart
        </button>
        <div className="hover:bg-[#3a3a3a]">
          <div className="top">
            <img
              src={props.img}
              alt=""
              className=" w-full hover:mix-blend-overlay hover:opacity-[0.72] "
            />
          </div>
          <div className="p-3 pb-6">
            <h2 className="font-bold text-xl text-gray-700">{props.name}</h2>
            <p className="text-gray-500">{props.type}</p>
            <div className="flex gap-4">
              <p className="font-bold text-gray-700">{props.price} </p>
              <span className="text-[#B0B0B0]">
                <s>{props.old}</s>
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Card;
