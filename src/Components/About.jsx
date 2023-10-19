import logo from "../images/diriku.png";
import { GrResume } from "react-icons/gr";
import pdefnew from "../images/cv front-end.pdf";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="abouts" className="pb-36 relative">
      <div className="w-full p-5 flex justify-centers">
        <div className="box-border">
          <h1 className=" duration-500 font-Jost text-2xl text-center pt-10 sm:text-4xl">
            ABOUT ME
          </h1>
          <div className="text-left sm:text-left ">
            <motion.img
              className="w-full sm:w-80  md:w-96 lg:w-[800px] object-cover"
              animate={{ x: 10, opacity: 1 }}
              transition={{ duration: 2, type: "just" }}
              whileInView={{ opacity: 1 }}
              initial={{ x: -700, opacity: 0 }}
              src={logo}
              alt="error"
            />
            <div className="p-10  sm:absolute top-[150px] left-[320px] md:ml-20 lg:ml-96">
              <h1 className="text-2xl font-Jost sm:text-xl  md:text-2xl lg:text-4xl ">
                Mochamad Naufal Aufa Rifqi
              </h1>
              <h3 className="text-xl font-semibold duration-500 ">About Me</h3>
              <p className="text-left duration-500">
                Hi my name is mochamad naufal you can call opal LMAO ,
              </p>
              <p className="duration-500">
                Live In Jakarta Indonesian , interested in technology and design
              </p>
              <div className="mt-5 ">
                <a
                  target="_blank"
                  href={pdefnew}
                  className="hover:bg-slate-600 duration-300  p-4 bg-yellow-300  font-bold rounded-lg my-2 sm:p-3 text-sm  md:text-sm lg:text-xl "
                  rel="noreferrer"
                >
                  View Resume
                  <span className="inline-block relative top-[3px] ml-2">
                    <GrResume />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
