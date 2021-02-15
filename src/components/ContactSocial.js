
import {contactGithub,contactMail,contactTwitter,contactFacebook,contactLinkedin} from "../assets/images";
import {Link} from "react-router-dom";

function ContactSocial() {
  return (
    <div id="contact" className="bg-white flex flex-col items-center justify-center pt-20">
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
  );
}

export default ContactSocial;
