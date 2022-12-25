import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Sponsors() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

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
        y: "-20vw",
      });
      animation2.start({
        opacity: 0,
        y: "20vw",
      });
      animation3.start({
        opacity: 0,
        y: "-10vw",
        scale: 0.5,
      });
    }
  });
  return (
    <motion.Reactdiv
      id="sponsors"
      className="z-0 flex items-center justify-center w-screen mb-[200px]"
      // className="z-0 flex items-center justify-center md:h-[900px] sm:h-[1500px] h-[1500px] w-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col w-screen w-full pb-10 mt-0 top-0 md:px-4 mt-0">
        <div className="flex w-full z-50">
          <h1
            style={{
              fontFamily: "valorax Regular",
              fontWeight: "normal",
            }}
            className="text-center subheadings w-screen lg:ml-10 text-center uppercase text-white font-valorax"
          >
            sponsors
          </h1>
        </div>
        <div>
          <h2
            className="text-white text-center mb-10 mt-10"
            style={{
              fontFamily: ["JetBrains Mono", "monospace"],
              fontSize: "40px",
              lineHeight: "1.5",
            }}
          >
            GOLD SPONSORS
          </h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 xsm: grid-cols-1 w-[50%] sm:w-[70%] mx-auto">
            <div className="mx-auto">
              <div className="super-box w-80 h-80 z-[0] bg-[#111b53] rounded-full">
                <div className="flex flex-col justify-center items-center relative w-full h-full">
                  <div className="box flex flex-col">
                    <div className="icon_bg w-80 h-80 rotate-90"></div>
                  </div>
                  <div className="icon">
                    <svg width="180" height="180" viewBox="0 0 256 315">
                      <g>
                        <path
                          d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="sponsor_text">
                    <h1 className="uppercase text-center text-[#111b53]">
                      title sponsor <br></br> apple
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <div className="super-box w-80 h-80 z-[0] bg-[#111b53] rounded-full">
                <div className="flex flex-col justify-center items-center relative w-full h-full">
                  <div className="box flex flex-col">
                    <div className="icon_bg w-80 h-80 rotate-90"></div>
                  </div>
                  <div className="icon">
                    <svg width="180" height="180" viewBox="0 0 256 315">
                      <g>
                        <path
                          d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="sponsor_text">
                    <h1 className="uppercase text-center text-[#111b53]">
                      title sponsor <br></br> apple
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2
            className="text-white text-center mb-10 mt-20"
            style={{
              fontFamily: ["JetBrains Mono", "monospace"],
              fontSize: "40px",
              lineHeight: "1.5",
            }}
          >
            SILVER SPONSORS
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xxsm:grid-cols-1 mx-auto lg:w-[100%] gap-8 sm:w-[70%]">
            <div className="mx-auto">
              <div className="super-box w-80 h-80 z-[0] bg-[#111b53] rounded-full">
                <div className="flex flex-col justify-center items-center relative w-full h-full">
                  <div className="box flex flex-col">
                    <div className="icon_bg w-80 h-80 rotate-90"></div>
                  </div>
                  <div className="icon">
                    <svg width="180" height="180" viewBox="0 0 256 315">
                      <g>
                        <path
                          d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="sponsor_text">
                    <h1 className="uppercase text-center text-[#111b53]">
                      title sponsor <br></br> apple
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <div className="super-box w-80 h-80 z-[0] bg-[#111b53] rounded-full">
                <div className="flex flex-col justify-center items-center relative w-full h-full">
                  <div className="box flex flex-col">
                    <div className="icon_bg w-80 h-80 rotate-90"></div>
                  </div>
                  <div className="icon">
                    <svg width="180" height="180" viewBox="0 0 256 315">
                      <g>
                        <path
                          d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="sponsor_text">
                    <h1 className="uppercase text-center text-[#111b53]">
                      title sponsor <br></br> apple
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto">
              <div className="super-box w-80 h-80 z-[0] bg-[#111b53] rounded-full">
                <div className="flex flex-col justify-center items-center relative w-full h-full">
                  <div className="box flex flex-col">
                    <div className="icon_bg w-80 h-80 rotate-90"></div>
                  </div>
                  <div className="icon">
                    <svg width="180" height="180" viewBox="0 0 256 315">
                      <g>
                        <path
                          d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="sponsor_text">
                    <h1 className="uppercase text-center text-[#111b53]">
                      title sponsor <br></br> apple
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" flex flex-col h-screen w-screen z-50 space-y-8">
        <div className="flex flex-row w-full h-1/2 justify-center items-center space-x-8">
          <div className="flex w-1/4 h-full bg-red-500 rotate-12"></div>
          <div className="flex w-1/4 h-full bg-red-500 rotate-[-45deg]"></div>
          <div className="flex w-1/4 h-full bg-red-500"></div>
        </div>
        <div className="flex flex-row w-full h-1/2 justify-center items-center space-x-8">
          <div className="flex w-1/4 h-full bg-red-500"></div>
          <div className="flex w-1/4 h-full bg-red-500"></div>
          <div className="flex w-1/4 h-full bg-red-500"></div>
        </div>
      </div> */}
    </motion.Reactdiv>
  );
}

export default Sponsors;
