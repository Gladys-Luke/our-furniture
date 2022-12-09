import React from "react";
import icon1 from "../Assets/images/icon1.svg";
import icon2 from "../Assets/images/icon2.svg";
import icon3 from "../Assets/images/icon3.svg";
import customersupport from "../Assets/images/customer-support.svg";

function MiniHeader() {
  return (
    <section className="lg:flex lg:justify-between lg:items-center lg:pl-20 lg:pr-8 lg:pt-14 pl-6 grid grid-cols-2">

      <figure className="lg:flex lg:justify-between w-56 grid grid-cols-1 mb-14 lg:mb-0">
        <img src={icon2} alt="icon" className="w-8" />
        <figcaption>
          <h3 className="text-lg font-bold">High Quality</h3>
          <h5 className="text-sm text-grey font-bold">
            crafted from top materials
          </h5>
        </figcaption>
      </figure>

      <figure className="lg:flex lg:justify-between w-56 grid grid-cols-1 mb-14 lg:mb-0">
        <img src={icon1} alt="icon" className="w-8" />
        <figcaption>
          <h3 className="text-lg font-bold">Warrany Protection</h3>
          <h5 className="text-sm text-grey font-bold">over 2 years</h5>
        </figcaption>
      </figure>

      <figure className="lg:flex lg:justify-between w-44 grid grid-cols-1 mb-6 lg:mb-0">
        <img src={icon3} alt="icon" className="w-8"/>
        <figcaption>
          <h3 className="text-lg font-bold">Free Shipping</h3>
          <h5 className="text-sm text-grey font-bold">order over 150 $</h5>
        </figcaption>
      </figure>

      <figure className="lg:flex lg:justify-between w-44 grid grid-cols-1 mb-6 lg:mb-0">
        <img src={customersupport} alt="icon" className="w-8"/>
        <figcaption>
          <h3 className="text-lg font-bold">24/7 Support</h3>
          <h5 className="text-sm text-grey font-bold">Dedicated support</h5>
        </figcaption>
      </figure>
    </section>
  );
}

export default MiniHeader;
