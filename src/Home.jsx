import Header from "./Components/Header";
import Nav from "./Components/Nav";
import React, { useEffect, useState, useReducer } from "react";
import Card from "./Components/Card";
import Products from "./products";
import Furniture from "./Components/furniture";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";



function Home() {
  const [more, setMore] = useState(8);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Nav />
      <Header />
      <div>
        <h1
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex justify-center text-center p-10 text-3xl font-bold text-[#3A3A3A] mt-16"
        >
          Our Products
        </h1>

        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 px-16 "
        >
          {Products.slice(0, more).map((product, id) => (
            <Card
              key={id}
              product={product}
            />
          ))}
        </div>
        <div className="flex justify-center text-center">
          <button
            onClick={() =>
              setMore(more === Products.length ? -8 : Products.length)
            }
            className=" py-1 px-14 border-solid border-2 my-6 border-[#E89F71] text-[#E89F71] hover:bg-[#E89F71] hover:text-[#ffffff]"
            type="button"
          >
            {more === Products.length ? "Show less" : "Show More"}
          </button>
        </div>
        <Furniture />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
