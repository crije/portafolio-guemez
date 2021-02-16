import {headerGithub,headerMail,headerTwitter,headerFacebook,headerLikedin} from "../assets/images";
import {Link} from "react-router-dom";
function Header() {
  return (
    <ul id="header-social" className="list-none bg-primary h-7 flex flex-row place-items-center h-16 pl-28">
        <li className="mr-3">
        <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
        <img src={headerGithub} alt="logo github"/>
        </Link>
        </li>
        <li className="mr-3">
        <a href="mailto:crije_22@hotmail.com">
        <img src={headerMail} alt="sobrecito de correo"/>
        </a>
        </li>
        <li className="mr-3">
        <Link to={{ pathname: "https://twitter.com/crije22" }} target="_blank" >
        <img src={headerTwitter} alt="logo twitter"/>
        </Link>
        </li>
        <li className="mr-3">
        <Link to={{ pathname: "https://www.facebook.com/cristhian.guemez" }} target="_blank" >
        <img src={headerFacebook} alt="logo facebook"/>
        </Link>
        </li>
        <li className="mr-3">
        <Link to={{ pathname: "https://www.linkedin.com/in/cguemez/" }} target="_blank" >
        <img src={headerLikedin} alt="logo linkedin"/>
        </Link>
        </li>
    </ul>
  );
}

export default Header;
