import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers.jsx";

const Hero = () => {
  return (
    <section className="relative w-full h-[95vh] mx-auto ">
      <style>
        {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }

          .typing-effect {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            animation: typing 3s steps(60, end) forwards, blink-caret 0.75s step-end infinite;
          }

          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: #FFD700; /* Adjust cursor color */ }
          }
        `}
      </style>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col  justify-center items-center mt-4 ">
          <div className="w-5 h-5 rounded-full bg-[#854cd6]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I’m <br/><span className="text-[#FFD700] typing-effect">Haseeb Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I create intuitive,
            <br className="sm:block hidden" />
            user interfaces and build dynamic web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom bottom-25  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] mb-12px rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5 ,repeat:Infinity, repeatType:'loop'}} className="w-4 h-3 rounded-full bg-yellow-500">
              
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

