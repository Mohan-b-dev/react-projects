import React from "react";
import Bannerpng from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeLeft, Fadeup } from "../animation/animation";

const Banners2 = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={Fadeup(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl flex font-bold uppercase"
            >
              ONLINE FRUIT STORE
            </motion.h1>
            <motion.p
              variants={Fadeup(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam
              veritatis cumque sunt, quas magni blanditiis similique nesciunt
              deleniti nihil quod eius fugiat ad doloribus magnam reiciendis
              laudantium doloremque ea.
            </motion.p>
            <motion.p
              variants={Fadeup(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              quae illo ullam omnis facere at.
            </motion.p>
            {/* button section */}
            <motion.div
              variants={Fadeup(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Download App</button>
            </motion.div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity:0,x:200,rotate:75}}
            whileInView={{ opacity: 1,x:0,rotate:0 }}
            transition={{ duration:1, delay: 0.2 }}
            viewport={{ once: false }}
            src={Bannerpng}
            className="w-[350px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banners2;
