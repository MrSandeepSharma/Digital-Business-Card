import userImage from "../images/user-image.png";
import MailIcon from "../images/Mail.png";
import LinkedinIcon from "../images/linkedin.svg";

export default function Info() {
  return (
    <header>
      <img src={userImage} width="317px" height="317px" />
      <h1 className="clr-white-700 font-bold fs-700">Laura Smith</h1>
      <p className="clr-light fs-300">Frontend Developer</p>
      <p className="clr-white-400 fs-200">laurasmith.website</p>
      <nav className="container-wrapper" aria-label="Primary Navigation">
        <ul className="flex flex-center">
          <li>
            <a
              href="#"
              className="btn flex flex-center bg-white-700 clr-dark-200"
            >
              <img src={MailIcon} width="16px" height="16px" />
              Email
            </a>
          </li>
          <li>
            <a
              href="#"
              className="btn flex flex-center bg-special clr-white-700"
            >
              <img src={LinkedinIcon} width="16px" height="16px" />
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
