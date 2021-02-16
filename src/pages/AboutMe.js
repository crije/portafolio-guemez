import { useEffect,useState,useRef} from "react";
import {Footer} from "../components";
import {headerGithub,headerMail,headerTwitter,headerFacebook,headerLikedin,aboutMe,contactGithub,contactMail,contactTwitter,contactFacebook,contactLinkedin} from "../assets/images";
import {Link} from "react-router-dom";

function AboutMe() {
   const [active, setActive] = useState("about-me");
   const contactRef = useRef();
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
    <div className="h-heightHeaderAboutMe relative items-center justify-items-center justify-center flex flex-col bg-primary bg-about-me-header bg-right-top">
    <ul id="header-social" className="absolute left-0 top-0 list-none h-7 flex flex-row place-items-center h-16 pl-32 md:pl-28">
        <li className="mr-3">
        <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
        <img src={headerGithub} alt="logo de github"/>
        </Link>
        </li>
        <li className="mr-3">
        <a href="mailto:crije_22@hotmail.com">
        <img src={headerMail} alt="sobrecito de correo"/>
        </a>
        </li>
        <li className="mr-3">
        <Link to={{ pathname: "https://twitter.com/crije22" }} target="_blank" >
        <img src={headerTwitter} alt="logo de twitter"/>
        </Link>
        </li>
        <li className="mr-3">
        <Link to={{ pathname: "https://www.facebook.com/cristhian.guemez" }} target="_blank" >
        <img src={headerFacebook} alt="logo de facebook"/>
        </Link>
        </li>
        <li className="mr-3">
        <Link to={{ pathname: "https://www.linkedin.com/in/cguemez/" }} target="_blank" >
        <img src={headerLikedin} alt="logo de linkedin"/>
        </Link>
        </li>
    </ul>
    <div className="flex flex-col items-center self-center">
    <h1 className="font-raleway text-2xl text-center md:text-inherit text-white">
      <span className='font-bold'>¡Hola!</span>
      <span className="font-bold"> Soy Cristhian</span>
      <span className="font-extralight"> Guemez</span>
      </h1>
      <h2 className="font-roboto text-center md:text-inherit text-x4 text-white">
      <span className='font-bold text-center'>Front End</span>
      <span className="font-thin text-center"> Developer</span>
      </h2>
    </div>
    <ul id="links-nav" className="absolute bottom-0 right-0 mb-6 list-none flex content-end justify-around h-14 items-center font-raleway font-bold text-base text-white">
    <li className="text-center md:text-inherit ml-8 md:ml-0 md:mr-6 ">
    <Link to={{ pathname: "/" }} >
    Mi portafolio
    </Link>
    </li>

    <li onClick={() => { setActive('about-me')}}  className={`cursor-pointer text-center md:text-inherit mr-1 md:mr-6 ${active==="about-me" ? "text-green" : ""}`}>
    Acerca de mi
    </li>

   <li onClick={() => {contactRef.current.scrollIntoView();setActive('contact');}}  className={`cursor-pointer text-center md:text-inherit mr-8 md:mr-28 ${active==="contact" ? "text-green" : ""}`}>
    Contáctame
    </li>

</ul>
    </div>
    <div id="skill" className="bg-white  flex flex-col md:flex-row ml-0 mr-0 md:ml-marginSkills md:mr-marginSkills items-center justify-center">
   <div className="bg-gray-light mt-14 rounded-md flex flex-col w-widthSkillBackground h-heightSkillBackground">
      <img src={aboutMe} alt="la imagen mas profesional que encontre"/>
      <div className="bg-primary ml-11 w-40 mt-16 h-1"></div>
      <div className="ml-11 mr-11 text-gray">
         <h3 className="font-roboto font-bold text-lg mt-4">Acerca de mi</h3>
         <p  className="font-roboto font-light text-base mt-4">De fácil trato, actitud respetuosa, establezco relaciones laborales cordiales.</p>
         <p className="font-roboto font-light text-base mt-4">Apasionado de la programación y la tecnología, dispuesto a incursionar en nuevos retos que requieran diferentes lenguajes a los que actualmente no se encuentren mi stack de programación.</p>
         <p className="font-roboto font-light text-base mt-4">Busco contribuir en el desarrollo y crecimiento de la empresa mediante el aporte de mis conocimientos y destrezas.</p>
      </div>
   </div>
   <div className="ml-0 md:ml-10 mt-20 w-widthSkillBackground h-heightSkillBackground">
      <h2 className="font-raleway font-bold text-x35 mb-5">Soft-Skills</h2>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-11/12 h-7 rounded-full">
         <p className="ml-3">Trabajo en equipo</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-8/12 h-7 rounded-full">
         <p className="ml-3">Resolución de problemas</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-11/12 h-7 rounded-full">
         <p className="ml-3">comunicación</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-7/12 h-7 rounded-full">
         <p className="ml-3">Adaptabilidad</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-9/12 h-7 rounded-full">
         <p className="ml-3">Empatía</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-14">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-8/12 h-7 rounded-full">
         <p className="ml-3">Inteligencia Emocional</p>
      </div>
      </div>
      <h2 className="font-raleway font-bold text-x35 mt-14 mb-5">Hard-Skills</h2>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-8/12 h-7 rounded-full">
         <p className="ml-3">Html5</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-7/12 h-7 rounded-full">
         <p className="ml-3">Css3</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-6/12 h-7 rounded-full">
         <p className="ml-3">Javascript</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-4/12 h-7 rounded-full">
         <p className="ml-3">TypeScript</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-8/12 h-7 rounded-full">
         <p className="ml-3">Git</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-6/12 h-7 rounded-full">
         <p className="ml-3">React js</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-5/12 h-7 rounded-full">
         <p className="ml-3">React native</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-5/12 h-7 rounded-full">
         <p className="ml-3">Tailwind CSS</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-4/12 h-7 rounded-full">
         <p className="ml-3">Redux</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-5/12 h-7 rounded-full">
         <p className="ml-3">Ionic</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-8/12 h-7 rounded-full">
         <p className="ml-3">Boostrap</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-7/12 h-7 rounded-full">
         <p className="ml-3">Semantic UI</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-7/12 h-7 rounded-full">
         <p className="ml-3">Material UI</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-7/12 h-7 rounded-full">
         <p className="ml-3">Onsen UI</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-5/12 h-7 rounded-full">
         <p className="ml-3">Php</p>
      </div>
      </div>
      <div className="bg-gray-light w-lineWeight md:w-80 h-7 rounded-full mb-2">
      <div className="bg-primary text-white font-raleway flex items-center font-bold text-tiny-up w-5/12 h-7 rounded-full">
         <p className="ml-3">Laravel</p>
      </div>
      </div>
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

export default AboutMe;
