import { useState } from "react";
import { SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import { TbBrandTailwind } from "react-icons/tb";

function Navbar() {
  const [logoNav, setLogoNav] = useState(true);
  return (
    <div className="flex justify-between p-6 items-center fixed w-full  bg-white z-50   border-b-2 h-11">
      <h1 className="text-black p-1 px-4 pl-4  rounded-r-xl border-2 text-2xl font-bold ">
        Naufal Portfolio
      </h1>
      <motion.span
        className="bg-white border-4 rounded-full cursor-pointer p-1"
        onClick={() => setLogoNav((prevLogoNav) => !prevLogoNav)}
      >
        {logoNav === true ? (
          <TbBrandTailwind size={30} color="black" />
        ) : (
          <SiReact size={30} color="black" />
        )}
      </motion.span>
    </div>
  );
}

export default Navbar;
