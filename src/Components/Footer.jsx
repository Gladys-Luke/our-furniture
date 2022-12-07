import React from "react";

function Footer() {
  return (
    <div>
      <hr className=" w-[90%] m-auto  bg-black text-[#D8D8D8] border-1 mt-[15%] mb-[5%] " />
      <div className="w-[90%] m-auto flex ">
        <div className="w-[20%] mr-14">
          <h1 className="text-[24px] font-bold">Funiro.</h1>
          <ul className="text-[16px]">
            <li>
              Worldwide furniture store, since 2020. We sell over 1000+ branded
              products on our website.
            </li>
            <li> Sawojajar Malang, Indonesia.</li>
            <li>+6289 456 3455</li>
            <li>www.funiro.com</li>
          </ul>
        </div>

        <div className="w-[20%]">
          <h1 className="text-[24px] font-bold">Menu</h1>
          <ul>
            <li>Products</li>
            <li>Rooms</li>
            <li>Inspirations</li>
            <li>About Us</li>
            <li>Terms & Policy</li>
          </ul>
        </div>

        <div className="w-[20%]">
          <h1 className="text-[24px] font-bold">Account</h1>
          <ul>
            <li>My Account</li>
            <li>Checkout</li>
            <li>My Cart</li>
            <li>My catalog</li>
          </ul>
        </div>
        <div className="w-[20%]">
          <h1 className="text-[24px] font-bold">Stay Connected</h1>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div className="w-[20%]">
          <h1 className="text-[24px] font-bold">Stay Updated</h1>
          <div className="flex">
            <input
              placeholder="Enter your email"
              className="bg-[#F4F5F7] px-7 outline-none"
            ></input>
            <img
              src="/assets/images/arrow.png"
              alt=""
              className="bg-[#E89F71] p-3 type-submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
