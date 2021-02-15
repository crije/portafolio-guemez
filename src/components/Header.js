import {headerGithub,headerMail,headerTwitter,headerFacebook,headerLikedin} from "../assets/images";
import {Link} from "react-router-dom";
function Header() {
  return (
    <ul id="header-social" className="list-none bg-primary h-7 flex flex-row place-items-center h-16 pl-28">
        <li className="mr-3">
        <Link to={{ pathname: "https://github.com/crije" }} target="_blank" >
        <img src={headerGithub}/>
        </Link>
        </li>
        <li className="mr-3">
        <a href="mailto:crije_22@hotmail.com">
        <img src={headerMail}/>
        </a>
        </li>
        <li className="mr-3">
        <Link to={{ pathname: "https://twitter.com/crije22" }} target="_blank" >
        <img src={headerTwitter}/>
        </Link>
        </li>
        <li className="mr-3">
        <Link to={{ pathname: "https://www.facebook.com/cristhian.guemez" }} target="_blank" >
        <img src={headerFacebook}/>
        </Link>
        </li>
        <li className="mr-3">
        <Link to={{ pathname: "https://www.linkedin.com/in/cguemez/" }} target="_blank" >
        <img src={headerLikedin}/>
        </Link>
        </li>
    </ul>
  );
}

export default Header;
