import {logoWow,logoWild,logoPm,logoTrolley} from "../assets/images";
import {Header,HeroImage,ContactSocial,Footer} from "../components";
import {Link} from "react-router-dom";
import { useEffect } from 'react';
function Home() {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
    <Header/>
    <HeroImage/>
    <div id="hero-image" className="bg-white h-heightPortfolioMobile md:h-heightPortfolio">
      <div className="h-heightH2Portfolio flex flex-col justify-center items-center">
       <div>
       <h2 className="font-raleway text-x35 text-black text-center font-bold">Mi portafolio</h2>
        <p  className="font-roboto text-lg text-gray text-center font-light">Proyectos en los que participado</p>
       </div>
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 ml-4 mr-4 md:ml-portfolioSpace md:mr-portfolioSpace">
     <Link to={"/portfolio/wow"}>
     <div className="bg-company-wow bg-cover rounded-xl h-cardHeightPortfolio">
         <div  className="bg-gray hover:bg-purple hover:bg-opacity-60 cursor-pointer relative flex flex-col content-center justify-center items-center v rounded-xl  h-cardHeightPortfolio bg-opacity-60">
            <img src={logoWow} alt="logo de wow excursions"/>
            <div className="absolute bottom-6 left-6">
            <h3 className="font-roboto text-base text-white font-bold">Wow Excursions</h3>
           <p className="font-roboto text-base text-white font-light">Sistema de reserva y comercio electrónico</p>
            </div>
         </div>
        </div>
     </Link>
     <Link to={"/portfolio/wildtours"}>
     <div className="bg-company-wild bg-cover rounded-xl h-cardHeightPortfolio">
         <div  className="bg-gray hover:bg-purple hover:bg-opacity-60 relative flex flex-col content-center justify-center items-center bg-opacity-60 rounded-xl h-cardHeightPortfolio">
            <img src={logoWild} alt="logo de wildtours"/>
            <div className="absolute bottom-6 left-6">
            <h3 className="font-roboto text-base text-white font-bold">Wild Tours</h3>
           <p className="font-roboto text-base text-white font-light">Sistema de reserva y comercio electrónico</p>
            </div>
         </div>
        </div>
     </Link>
     <Link  to={"/portfolio/playamia"}>
     <div className="bg-company-playamia bg-cover rounded-xl h-cardHeightPortfolio">
         <div  className="bg-gray hover:bg-purple hover:bg-opacity-60 relative flex flex-col content-center justify-center items-center bg-opacity-60 rounded-xl h-cardHeightPortfolio">
            <img src={logoPm}  alt="logo de Playamia"/>
            <div className="absolute bottom-6 left-6">
            <h3 className="font-roboto text-base text-white font-bold">Playa Mía</h3>
           <p className="font-roboto text-base text-white font-light">Aplicación web, Sistema de reserva</p>
           <p className="font-roboto text-base text-white font-light">y comercio electronico</p>
            </div>
         </div>
        </div>
     </Link>
     <Link to={"/portfolio/trolley"}>
     <div className="bg-company-trolley bg-cover rounded-xl h-cardHeightPortfolio">
         <div  className="bg-gray hover:bg-purple hover:bg-opacity-60 relative flex flex-col content-center justify-center items-center bg-opacity-60 rounded-xl h-cardHeightPortfolio">
            <img src={logoTrolley}  alt="logo de trolley"/>
            <div className="absolute bottom-6 left-6">
            <h3 className="font-roboto text-base text-white font-bold">The trolley cozumel tour</h3>
           <p className="font-roboto text-base text-white font-light">Aplicación web, Sistema de reserva</p>
           <p className="font-roboto text-base text-white font-light">y comercio electronico</p>
            </div>
         </div>
        </div>
     </Link>
     <Link to={"/portfolio/mexicana"}>
     <div className="bg-company-mexicana bg-cover rounded-xl h-cardHeightPortfolio">
         <div  className="bg-gray hover:bg-purple hover:bg-opacity-60 relative flex flex-col content-center justify-center items-center bg-opacity-60 rounded-xl h-cardHeightPortfolio">
            <div className="absolute bottom-6 left-6">
            <h3 className="font-roboto text-base text-white font-bold">La mexicana</h3>
           <p className="font-roboto text-base text-white font-light">Sistema de empeños </p>
           <p className="font-roboto text-base text-white font-light">y gestión de inventarios</p>
            </div>
         </div>
        </div>
     </Link>
      </div>
    </div>
    <ContactSocial/>
    <Footer/>
    </>
  );
}

export default Home;
