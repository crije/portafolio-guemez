
import {webProgramming} from "../assets/images";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import { useState } from "react";
function HeroImage(props) {
  let { company } = useParams();
  const [active, setActive] = useState("portfolio")
  return (
    <div className={`bg-primary sm:ml-0 sm:mr-0 sm:pl-0 sm:pr-0  ${company===undefined ? "md:pl-marginLeft md:pr-marginLeft" : "md:pl-0 md:pr-0"}`}>
        {
          company===undefined &&
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
        }
        {
          company!==undefined &&
          <div>
          <div className={`bg-portfolio-hero-${props.background} bg-cover flex flex-cols pt-16 md:pt-0 md:h-detailHeight flex-col place-items-center place-content-center`} >
            <h1 className="font-raleway text-center text-2xl text-white">
            <div className="font-bold">{props.titleBold}</div>
            <div className="font-extralight">{props.titleExtraLight}</div>
            </h1>
           </div>
           <ul id="links-nav" className="list-none flex content-end justify-around sm:justify-end h-14 items-center font-raleway font-bold text-base text-white">
           <Link to={"/portfolio/"}>
            <li className="mr-0 md:mr-14">
            Mi portafolio
            </li>
            </Link>
            <Link to={"/portfolio/about-me"}>
            <li className="mr-0 md:mr-14">
            Acerca de mi
            </li>
            </Link>
            <li className={`md:mr-14 ${active==='contact' ? ' text-green' : ''}` } onClick={() => setActive('contact')}>
            <a href={"#contact"} >
            Contáctame
            </a>
            </li>
        </ul>
          </div>
        }
        {
          company===undefined &&
          <ul id="links-nav" className="list-none flex content-end justify-around sm:justify-end h-14 items-center font-raleway font-bold text-base text-white">
            <li className={`md:mr-14 ${active==="portfolio" ? "text-green" : ""}` }>
            <a href={"#hero-image"} onClick={() => setActive("portfolio")} >
            Mi portafolio
            </a>
            </li>
            <Link to={"/portfolio/about-me"}>
            <li className="md:mr-14">
            Acerca de mi
            </li>
            </Link>
            <li className={`md:mr-14 ${active==="contact" ? "text-green" : ""}` } onClick={() => setActive("contact")}>
            <a href={"#contact"} >
            Contáctame
            </a>
            </li>
        </ul>
        }
</div>
  );
}

export default HeroImage;
