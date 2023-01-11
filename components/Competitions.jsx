import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import comp_photo from "../public/DBZposter.jpeg";
import data from "./data/data.json";
import Caroosel from "./Caroosel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "./Carousel";

// import 'bootstrap/dist/css/bootstrap.min.css';

function Competitions() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });

      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });

      animation3.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: "-20%",
      });
      animation2.start({
        opacity: 0,
        y: "20%",
      });
      animation3.start({
        opacity: 0,
        y: "-10%",
        scale: 0.5,
      });
    }
  });
  return (
    <motion.Reactdiv
      id="competitions"
      className="flex items-center justify-center md:h-[1000px] sm:h-[1500px] h-[2500px] w-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full"
        ref={ref}
      >
        <motion.h1
          className="text-5xl text-center text-white md:font-[100px] sm:font-md"
          // animate={animation3}
          style={{
            fontFamily: "valorax Regular",
            fontWeight: "normal",
            fontSize: "40px",
          }}
        >
          COMPETITIONS
        </motion.h1>

        <Carousel></Carousel>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 msm:grid-cols-2 xsm:grid-cols-1 xxsm:grid-cols-1 flex items-center justify-center grid-flow-row gap-x-10 gap-y-10 h-100">
          {data.resources.map((comp, key) => (
            <CardTwo details={comp} key={key}></CardTwo>
          ))}
        </div>
      </motion.div>
    </motion.Reactdiv>
  );
}

export default Competitions;
