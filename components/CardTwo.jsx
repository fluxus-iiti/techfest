import React from "react";
import { motion, useAnimation } from "framer-motion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "25px",
  p: 4,
};

function CardTwo(props) {
  const animation = useAnimation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <motion.div
      className="flux flex items-center h-[300px] justify-center relative overflow-hidden rounded-lg shadow-lg cursor-pointer x-100 md:w-[20vw] msm:w-[35vw] xsm:w-[75vw]"
      whileHover={{ y: -4, boxShadow: "0px 0px 15px 0px #FFFFFF" }}
      initial={{ opacity: 0, y: "100px", rotate: -4 }}
      animate={{ opacity: 1, y: "0px", rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        className="object-fill h-[225px] pb-10"
        // src="https://wallpaper.dog/large/10702676.jpg"
        src={props.details.src}
        // style={{ width: "100%", height: "400px" }}
        alt="Flower and sky"
      />
      {/* <div className="bg-red w-full h-49">hello</div> */}
      <div className="absolute bottom-0 left-0 px-1 py-4 bg-slate-500/50 w-[100%] block">
        <h4
          className="mb-3 text-sm font-semibold tracking-tight text-white w-100 block uppercase"
          style={{
            fontFamily: ["JetBrains Mono", "monospace"],
            fontSize: "13px",
            lineHeight: "1.5",
          }}
        >
          {props.details.name}
        </h4>
        {/* <p className="leading-normal text-gray-100">
          Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
          tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
        </p> */}
        <div className="grid grid-cols-2 md:gap-2 sm:gap-2 xsm:gap-2 xxsm:gap-2">
          <button
            onClick={() => setOpen(true)}
            className="four text-black w-100"
            style={{
              fontFamily: ["JetBrains Mono", "monospace"],
              fontSize: "15px",
              lineHeight: "1",
              display: "flex",
              paddingVertical: 0,
              marginBottom: 0,
              justifyContent: "center",
              alignItems: "center",
              clipPath:
                "polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)",
            }}
          >
            <b>Details</b>
          </button>
          <a href={props.details.link}>
            <button
              className="one text-black w-100"
              style={{
                fontFamily: ["JetBrains Mono", "monospace"],
                fontSize: "15px",
                lineHeight: "1",
                display: "flex",
                paddingVertical: 0,
                marginBottom: 0,
                justifyContent: "center",
                alignItems: "center",
                clipPath:
                  "polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)",
              }}
            >
              <b>{props.details.button}</b>
            </button>
          </a>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transform={{
            duration: 2,
            delay: 1,
          }}
        >
          <Box sx={style}>
            <h1
              style={{
                fontFamily: "valorax Regular",
                fontWeight: "normal",
                fontSize: "40px",
              }}
              className="text-center"
            >
              {props.details.name}
            </h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 h-[90%] p-4 overflow-scroll">
              <div>
                <Image
                  className="object-fill rounded-md h-[100%] w-[600px] relative"
                  src={props.details.src}
                  width={600}
                  height={500}
                />
              </div>

              <div
                className="p-6"
                style={{
                  fontFamily: ["JetBrains Mono", "monospace"],
                  fontSize: "19px",
                  lineHeight: "1.5",
                }}
              >
                {props.details.content}
              </div>
            </div>
          </Box>
        </motion.div>
      </Modal>
    </motion.div>
  );
}

export default CardTwo;
