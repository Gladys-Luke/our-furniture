import React from "react";
import HeaderImg from '../Assets/images/header.png'

function Header(){
    return(
        <header className="relative">
            <img src={HeaderImg} alt='living room chair furniture' className="absolute"/>
            <section className="w-widthH h-headerH flex flex-col justify-center leading-3 tracking-wide absolute -top-10 ml-20 bg-pops pl-16 pr-6">
                <h1 className=" w-64 text-4xl">High-Quality Furniture Just For You</h1>
                <p className="mt-4 w-72 mr-8 mb-4 leading-5 tracking-wide font-semibold">Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
                <button className="bg-button text-white font-medium text-base w-72 h-14">Shop Now</button>               
            </section>
            <section className="text-xl bg-pops absolute top-96 right-36 h-10 px-1">
                <h3 className=" flex justify-between w-52 px-2 ">Rp 17.000.000<span>arrow</span></h3>
            </section>
            <section className="absolute top-52 right-56">
                <h3 className="text-xl font-bold">Bohauss</h3>
                <p className="text-xs font-semibold">Luxury big sofa 2-seat</p>

            </section>
        </header>

    )
}

export default Header