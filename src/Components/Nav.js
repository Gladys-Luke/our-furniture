import React, { useState, useContext } from "react";
import { Transition } from "@headlessui/react";
import { BsCart2 } from "react-icons/bs";
import Avatar from "../Assets/images/avatar.svg";
import search from "../Assets/images/search.svg";
import { AiFillDelete } from "react-icons/ai";
import Products from "../products";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { state } = useContext(Context);

  const {cart} = state;
  let itemCount = 0;

  for(const [key, value] of Object.entries(cart)){
    itemCount = itemCount + cart[key].qty
  }

  return (
    <div className="bg-nav lg:pb-16">
      <nav className="text-ash">
        <div className="">
          <div className="flex justify-between items-center pl-4 lg:pl-16 mr-8 h-28">
            <div className="flex justify-between w-screen ml-4 mr-4">
              <h2 className="text-xl text-center text-black font-bold">
                {" "}
                <a href="/" className="">
                  Funiro
                </a>
              </h2>
              <div className="flex-shrink-0"></div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-b space-x-4 ">
                  <ul className="nav-links flex justify-between items-center text-base xxs:absolute xxm:absolute xms:absolute ">
                    <li>
                      <a href="/product" className=" font-bold text-sm">
                        Products
                      </a>
                    </li>
                    <li className="ml-6 mr-6">
                      <input
                        placeholder="search for minimalistic chair"
                        className="w-96 p-2"
                      ></input>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block ">
                <ul className="flex gap-4 items-center justify-center">
                  <li className="flex relative bg-white px-4 justify-center items-center border-xl rounded-md shadow-xl">
                    <BsCart2
                      onClick={() => setOpenCart(!openCart)}
                      className="w-4 cursor-pointer"
                    />
                    <p className="text-[13px] text-[#EB455F]">{itemCount}</p>
                    <div
                      className={`absolute top-5 w-[200px] bg-[#E89F71] right-[-10px] h-[200px] z-10  ${
                        !openCart
                          ? "hidden"
                          : "flex flex-col gap-2 rounded shadow-2xl"
                      } overflow-hidden`}
                    >
                      <div className="overflow-y-scroll flex flex-col gap-4 p-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
                        {Object.keys(cart).map((item) => (
                          <div
                            key={cart[item]}
                            className="flex gap-2 items-center text-white font-bold"
                          >
                            <span>
                              <img
                                src={cart[item].img}
                                alt="furniture"
                                className="h-[28px] w-[28px]"
                              />
                            </span>
                            <span className="text-xs">{cart[item].name}</span>
                            <span className="text-xs">{cart[item].price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center ">
                      <Link to="/cart">
                        <button className="bg-white px-10 rounded-md text-[#EB455F]">Go to Cart</button>
                      </Link>
                      </div>
                    </div>
                  </li>

                  <li className="">
                    <a href="/profile">
                      <img src={Avatar} alt="profile" className="w-10" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-product inline-flex items-center justify-center p-2 h-10 rounded-md text-white hover:text-button hover:bg-product focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-nav h-screen text-button"
              >
                <ul className="nav-links flex flex-col items-center justify-between h-80 mt-10 font-medium ">
                  <li>
                    <a href="/" className="border-b-2 border-green ">
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="/product">Product</a>
                  </li>

                  <li>
                    <a href="/cart">Cart</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
