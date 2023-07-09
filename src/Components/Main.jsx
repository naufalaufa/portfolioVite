import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Main() {
  return (
    <div className="pt-64 px-10 pb-[50px] font-Jost">
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-4xl font-bold sm:text-5xl duration-300"
        // style={{ color: "white" }}
      >
        Hi! , Welcome To <span className="text-yellow-600 ">My Portfolio</span>
      </motion.h1>
      <div className=" text-xl font-bold ">
        <TypeAnimation
          repeat={Infinity}
          sequence={["Front End", 1000, "Web Developer", 2000]}
          speed={200}
        />
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="duration-300"
          // style={{ color: "black" }}
        >
          Lets enjoy for the experience
        </motion.p>
      </div>
      <motion.a
        onClick={() => {
          document
            .getElementById("abouts")
            .scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="cursor-pointer bg-orange-300 p-6 inline-block mt-5 rounded-full hover:text-white hover:bg-slate-500 animate-bounce duration-100"
      >
        Show More
      </motion.a>
    </div>
  );
}

export default Main;
