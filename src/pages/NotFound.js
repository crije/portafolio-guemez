import { useEffect } from "react";
import "../index.css";
import {notFound} from "../assets/images/index";
import {Link} from "react-router-dom";
function NotFound() {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
<>
<div className="bg-primary fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
  <div className=" py-2 px-5 rounded-lg text-xl flex items-center flex-col text-center text-white font-roboto font-bold">
  <img src={notFound} className="w-4/5 md:w-1/2" alt="escuadrón especial de búsqueda de rutas perdidas"/>
  No conseguí encontrar la ruta que especificaste pero quizás ellos si puedan
  <Link to={"/"}>
        <button className="bg-secondary mt-8 w-40 rounded-md font-raleway font-bold text-tiny h-14 uppercase text-black">Regresar</button>
        </Link>
  </div>
  </div>
</>
  );
}

export default NotFound;
