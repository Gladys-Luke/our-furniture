import React from "react";
import HeaderImg from "../Assets/images/header.svg";
import MiniHeader from "./MiniHeader";

function Header() {
  return (
    <main>

    <header className="lg:relative mb-6 flex flex-col">
      <section className="">
        <img
          src={HeaderImg}
          alt="living room chair furniture"
          className=" p-1 bg-nav"
        />
        <section className="w-widthH h-headerH flex flex-col justify-center leading-3 tracking-wide lg:absolute lg:-top-10 lg:ml-20 pl-6 bg-pops lg:pl-16 lg:pr-6">
          <h1 className="lg:w-80 text-5xl">
            High-Quality Furniture Just For You
          </h1>
          <p className="mt-4 lg:w-80 mr-8 mb-4 text-lg text-grey font-semibold">
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </p>
          <button className="bg-button text-white font-medium text-base w-72 h-14">
            Shop Now
          </button>
        </section>
        <section className="lg:absolute lg:top-52 lg:right-64 hidden lg:block">
          <h3 className="text-2xl font-bold">Bohauss</h3>
          <p className="text-sm font-semibold">Luxury big sofa 2-seat</p>
        </section>
        <section className="text-xl bg-pops lg:absolute lg:top-96 lg:right-48 h-12 lg:flex items-center px-1 hidden">
          <h3 className=" flex justify-between lg:w-52 px-2 ">
            Rp 17.000.000<span>arrow</span>
          </h3>
        </section>
      </section>
    </header>
<MiniHeader/>
    </main>

  );
}

export default Header;
