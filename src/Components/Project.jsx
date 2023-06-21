import Netflix from "../images/NETFLIX-NEW-REV.png";
import CrudsPng from "../images/crudsspngs.png";

function Project() {
  return (
    <div className=" pt-[200px]  pb-36 ">
      <h1 className="text-2xl font-bold text-center p-10 sm:text-4xl">
        PROJECT
      </h1>
      <div className="sm:flex text-center font-bold ">
        <div className="p-8 ">
          <h1 className="text-left my-5 text-xl sm:sm:text-2xl">
            Netflix Clone
          </h1>
          <a
            href="https://netflix-clone-naufal.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Netflix}
              alt="error"
              className="cursor-pointer hover:scale-110 duration-100"
            />
          </a>
          <p className="text-left mt-10 font-light">
            Netflix clone project using react js technology, redux, firebase,
            Click image for view project , if there is a warning click details
            -VISIT THIS UNSAFE SITE-
          </p>
        </div>
        <div className="p-8 ">
          <h1 className="text-left my-5 text-xl sm:text-2xl">CRUD SHOPPING</h1>
          <a
            href="https://cruds-redux.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: "3000px" }}
              src={CrudsPng}
              alt="error"
              className="cursor-pointer hover:scale-110 duration-100  "
            />
          </a>
          <p className="text-left mt-10 font-extralight">
            CRUD USING REACT-BOOTSTAP , REDUX TOOLKIT , AND AXIOS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
