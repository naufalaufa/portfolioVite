import { useState } from "react";
import { motion } from "framer-motion";
import { RiSunFoggyFill } from "react-icons/ri";

import { HiMoon } from "react-icons/hi";
function Navbar() {
  const bodys = document.getElementById("root");
  const [logoNav, setLogoNav] = useState(true);
  return (
    <div className="flex justify-between p-6 items-center fixed w-full z-50 bg-transparent  border-b-2 h-11">
      <h1 className=" bg-yellow-200 p-1 px-4 pl-4  rounded-r-xl border-2 text-2xl font-bold ">
        Naufal Portfolio
      </h1>
      <motion.span
        className="cursor-pointer p-1 bg-transparent"
        onClick={() => setLogoNav((prevLogoNav) => !prevLogoNav)}
      >
        {logoNav === true ? (
          <HiMoon
            size={35}
            color="black"
            style={{
              transition: (bodys.style.transition = "1s"),
              color: (bodys.style.color = "white"),
              backgroundColor: (bodys.style.backgroundColor = "black"),
            }}
          />
        ) : (
          <RiSunFoggyFill
            size={35}
            color="black"
            style={{
              color: (bodys.style.color = "black"),
              backgroundColor: (bodys.style.backgroundColor = "white"),
              transition: (bodys.style.transition = "1s"),
            }}
          />
        )}
      </motion.span>
    </div>
  );
}

export default Navbar;
