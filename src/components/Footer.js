
import {footerGithub,footerMail,footerTwitter,footerFacebook,footerLinkedin} from "../assets/images";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <div id="footer-section" className="bg-primary h-96 flex flex-col items-center justify-center">
        <p  className="font-raleway text-base text-center font-light text-white pt-11 pb-16">¡Embarquémonos en nuevos proyectos juntos!</p>
        <h2 className="font-raleway text-x35 text-center text-white">
          <span className='font-bold'>Front End</span>
          <span className="font-extralight"> Developer</span>
        </h2>
        <p className="font-roboto text-xl text-center text-green pb-20">
          <span className='font-thin text-center'>Cristhian</span>
          <span className="font-bold text-center"> Guemez</span>
          </p>
         <div className="flex flex-row">
         <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
         <img className="mr-3 md:mr-5" src={footerGithub} alt="logo de github"/>
          </Link>
          <a href="mailto:crije_22@hotmail.com">
          <img className="mr-3 md:mr-5" src={footerMail} alt="un sobrecito de correo"/>
          </a>
          <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
          <img className="mr-3 md:mr-5" src={footerTwitter} alt="logo de twitter"/>
          </Link>
          <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
          <img className="mr-3 md:mr-5" src={footerFacebook} alt="logo de facebook"/>
          </Link>
          <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
          <img className="mr-3 md:mr-5" src={footerLinkedin} alt="logo de linkedin"/>
          </Link>
         </div>
      </div>
  );
}

export default Footer;
