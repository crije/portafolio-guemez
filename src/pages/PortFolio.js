import {Header,Footer} from "../components";
import {Link} from "react-router-dom";
import { useParams} from "react-router";
import { useEffect, useState,useRef } from "react";
import {db} from "../firebase-config";
import {contactGithub,contactMail,contactTwitter,contactFacebook,contactLinkedin} from "../assets/images";

import Loading from "./Loading";
import NotFound from "./NotFound";
function PortFolio() {
   let { company } = useParams();
   const [project, setProject] = useState([]);
   const [mounted, setMounted] = useState(true);
   const [fireIsUndefined, setFireIsUndefined] = useState(false);
   const [active, setActive] = useState("about-me");
   const contactRef = useRef();
    useEffect(() => {
        if(company!==undefined){
          window.scrollTo(0, 0)
          db.collection("projects").where("id", "==", company).get()
          .then(response => {
            if(mounted) {
              setProject(response.docs[0].data());
              setMounted(false)
            }
          })
          .catch(error => {
            setMounted(false)
          });
        } else {
          setFireIsUndefined(true)
        }
    }, [])
    if (fireIsUndefined) return <NotFound/>
    if (mounted) return <Loading/>
    const technologies = project.technologies ?? [];
    let style='';
    if(company==='wow'){
      style='bg-portfolio-detail-wow w-80 md:w-portfolioBackgroundDetail self-center md:self-auto h-portfolioBackgroundDetailHeight bg-auto bg-no-repeat md:bg-cover';
    }
    
  return (
    <>
    <Header/>
    <div className={"bg-primary sm:ml-0 sm:mr-0 sm:pl-0 sm:pr-0 md:pl-0 md:pr-0"}>
    <div className={`bg-portfolio-hero-${project.id} bg-cover flex flex-cols pt-16 md:pt-0 md:h-detailHeight flex-col place-items-center place-content-center`} >
            <h1 className="font-raleway text-center text-2xl text-white">
            <div className="font-bold">{project.title_bold}</div>
            <div className="font-extralight">{project.title_extra_light}</div>
            </h1>
           </div>
           <ul id="links-nav" className="list-none flex content-end justify-around sm:justify-end h-14 items-center font-raleway font-bold text-base text-white">
           <Link to={"/"}>
            <li className="mr-0 md:mr-14">
            Mi portafolio
            </li>
            </Link>
            <Link to={"/about-me"}>
            <li className="mr-0 md:mr-14">
            Acerca de mi
            </li>
            </Link>
            <li  onClick={() => {contactRef.current.scrollIntoView();setActive('contact');}}  className={`cursor-pointer md:mr-14 ${active==='contact' ? ' text-green' : ''}` }>
            Contáctame
            </li>
        </ul>
    </div>
    <div id="portfolio-details" className="bg-white mt-28 flex flex-col md:flex-row  h-heightPortfolioDetailsMobil md:h-heightPortfolioDetails ml-4 mr-4 md:ml-32 md:mr-32">
      <div className={style}>

      </div>
      <div className="w-portFolioDescriptionWidth h-portFolioDescriptionHeight ml-0 md:ml-margin-portfolio">
      <p className="mb-5 font-roboto text-base text-black font-bold">Descripción:</p>
      <p className="mb-16 font-roboto text-base text-gray font-light">{project.description}</p>
      <p className="mb-8 font-roboto text-base text-black font-bold">Tecnologías implementadas:</p>
      <div className="grid grid-cols-3 gap-4">
      {technologies.map((technology,i) =>
         <div key={`tecno${i}`} className='w-tecnologyWidth h-tecnologyWidth bg-gray-light rounded-md'>
            <div className={`bg-technology-${technology} w-tecnologyWidth h-tecnologyWidth bg-no-repeat bg-center`}></div>
         </div>
      )}
      </div>
        <Link to={{ pathname: project.url }} target="_blank">
        <button disabled={company==='mexicana'? true : false} className="bg-primary mt-8 w-40 rounded-md font-raleway font-bold text-tiny h-14 uppercase text-white">Visitar Sitio</button>
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

export default PortFolio;
