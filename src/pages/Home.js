import {logoWow,logoWild,logoPm,logoTrolley,webProgramming,contactGithub,contactMail,contactTwitter,contactFacebook,contactLinkedin} from "../assets/images";
import {Header,Footer} from "../components";
import {Link} from "react-router-dom";
import { useEffect,useState,useRef } from 'react';
function Home() {
   const [active, setActive] = useState("portfolio");
   const contactRef = useRef();
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
    <Header/>
    <div className="bg-primary sm:ml-0 sm:mr-0 sm:pl-0 sm:pr-0 md:pl-marginLeft">
    <div className="bg-hero-image pt-16 md:pt-0 bg-cover md:bg-auto  pl-28 pr-28  md:pl-28 md:pr-28 md:w-hero-image-width md:h-hero-image-height flex flex-col place-items-center place-content-center" >
            <img src={webProgramming} alt="alt web programming"/>
            <h1 className="font-raleway text-2xl text-white">
            <span className="font-bold">Front End</span>
            <span className="font-extralight"> Developer</span>
            </h1>
            <p className="font-roboto text-x4 text-green">
            <span className="font-thin text-center">Cristhian</span>
            <span className="font-bold text-center"> Guemez</span>
            </p>
           </div>
           <ul id="links-nav" className="list-none flex content-end justify-around sm:justify-end h-14 items-center font-raleway font-bold text-base text-white">
            <li className={`md:mr-14 ${active==="portfolio" ? "text-green" : ""}` }>
            <a href={"#hero-image"} onClick={() => setActive("portfolio")} >
            Mi portafolio
            </a>
            </li>
            <Link to={"/about-me"}>
            <li className="md:mr-14">
            Acerca de mi
            </li>
            </Link>
            <li className={`cursor-pointer md:mr-14 ${active==="contact" ? "text-green" : ""}` } onClick={() => {
               contactRef.current.scrollIntoView();
               setActive('contact');
            }}>
            Contáctame
            </li>
        </ul>
    </div>
    <div id="hero-image" className="bg-white h-heightPortfolioMobile md:h-heightPortfolio">
      <div className="h-heightH2Portfolio flex flex-col justify-center items-center">
       <div>
       <h2 className="font-raleway text-x35 text-black text-center font-bold">Mi portafolio</h2>
        <p  className="font-roboto text-lg text-gray text-center font-light">Proyectos en los que participado</p>
       </div>
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 ml-4 mr-4 md:ml-portfolioSpace md:mr-portfolioSpace">
     <Link to={"/project/wow"}>
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
     <Link to={"/project/wildtours"}>
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
     <Link  to={"/project/playamia"}>
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
     <Link to={"/portfolio/project/trolley"}>
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
     <Link to={"/project/mexicana"}>
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
    <div id="contact" ref={contactRef} className="bg-white flex flex-col items-center justify-center pt-20">
        <h2 className="font-raleway text-x35 text-black font-bold">Contáctame</h2>
        <div className="flex flex-row">
          <div className="bg-gray-light hover:bg-secondary cursor-pointer mr-1 md:mr-5 w-16 h-16 rounded-full flex items-center justify-center">
          <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
          <img src={contactGithub} alt="logo de github"/>
          </Link>
          </div>
          <div className="bg-gray-light hover:bg-secondary cursor-pointer mr-1 md:mr-5 w-16 h-16 rounded-full flex items-center justify-center">
          <a href="mailto:crije_22@hotmail.com">
          <img src={contactMail} alt="un sobrecito de correo"/>
          </a>
          </div>
          <div className="bg-gray-light hover:bg-secondary cursor-pointer mr-1 md:mr-5 w-16 h-16 rounded-full flex items-center justify-center">
          <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
          <img src={contactTwitter} alt="logo de twitter"/>
          </Link>
          </div>
          <div className="bg-gray-light hover:bg-secondary cursor-pointer mr-1 md:mr-5 w-16 h-16 rounded-full flex items-center justify-center">
          <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
          <img src={contactFacebook} alt="logo de facebook"/>
          </Link>
          </div>
          <div className="bg-gray-light hover:bg-secondary cursor-pointer mr-1 md:mr-5 w-16 h-16 rounded-full flex items-center justify-center">
          <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
          <img src={contactLinkedin} alt="logo de linkedin"/>
          </Link>
          </div>
        </div>
        <p className="font-roboto pt-20 text-lg text-gray-light font-bold mr-8 ml-8 md:mr-0 md:ml-0 pb-24">El código que haga hoy sera mejor que de ayer.</p>
      </div>
    <Footer/>
    </>
  );
}

export default Home;
