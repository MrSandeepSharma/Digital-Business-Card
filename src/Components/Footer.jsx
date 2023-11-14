import TwitterIcon from "../images/Twitter.png";
import FacebookIcon from "../images/Facebook.png";
import InstagramIcon from "../images/Instagram.png";
import GithubIcon from "../images/GitHub.png";

export default function Footer() {
  return (
    <footer className="bg-clr-dark-700">
      <nav className="container-wrapper" aria-label="secondary navigation">
        <ul className="flex flex-center">
          <li>
            <a href="#" aria-label="Twitter">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Facebook">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Github">
              <img src={GithubIcon} alt="Github" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
