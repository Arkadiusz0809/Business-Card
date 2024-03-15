import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "../images/git-logo.svg";
import { ReactComponent as FacebookIcon } from "../images/logo-facebook.svg";
import { ReactComponent as LinkedInIcon } from "../images/logo-linkedin.svg";
import { ReactComponent as InstagramIcon } from "../images/logo-instagram.svg";


// WPISAĆ SWOJE URL
export const socials = [
    {
        name: "Github",
        url: "https://github.com/Arkadiusz0809",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/arito2115/?locale=pl_PL",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "http://lickedin.com",
        Icon: styleIcon(LinkedInIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/arkadiusz.torun/",
        Icon: styleIcon(InstagramIcon),
    },
];
