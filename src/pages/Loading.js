import { useEffect } from "react";
import "../index.css";
function Loading() {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
<>
<div className="bg-primary fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
  <div className=" py-2 px-5 rounded-lg flex items-center flex-col">
    <div className="loader-bolita block relative w-20 h-5 mt-2">
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-white"></div>
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-white"></div>
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-white"></div>
      <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-white"></div>
    </div>
    <div className="text-white text-xs font-raleway font-bold mt-2 text-center">
     Cargando...
    </div>
  </div>
  </div>
</>
  );
}

export default Loading;
