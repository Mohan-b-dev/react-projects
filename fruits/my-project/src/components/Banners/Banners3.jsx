import React from "react";
import Bannerpng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import {  FadeLeft, Fadeup } from "../animation/animation";
import { IoBagHandleOutline } from "react-icons/io5";


const bgstyle ={
    backgroundImage: `url(${Bannerpng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

}


const Banners3 = () => {
  return (
    <section className="container mb-12">
      <div
        style={bgstyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        {/* Blank div */}
        <div></div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold uppercase"
            >
              GET FRESH FRUITS TODAY
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam
              veritatis cumque sunt, quas magni blanditiis similique nesciunt
              deleniti nihil quod eius fugiat ad doloribus magnam reiciendis
              laudantium doloremque ea.
            </motion.p>

            {/* button section */}
            <motion.div
              variants={Fadeup(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners3;
