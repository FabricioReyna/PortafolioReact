import { BiArrowToTop, BiLogoFacebookCircle, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoSkype } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./style.scss";

const FooterComp = () => {
  return (
    <footer>
      <a href="#inicio" className="Up">
        <BiArrowToTop className="IconUpFooter" />
      </a>
      <div className="redes">
        <NavLink to="https://www.facebook.com/fabricio.reyna2/">
          <BiLogoFacebookCircle  className="IconsStyles"/>
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/fabridevtoll/">
          <BiLogoLinkedin  className="IconsStyles"/>
        </NavLink>
        <NavLink to="https://www.instagram.com/frontend_boantek/">
          <BiLogoInstagram  className="IconsStyles"/>
        </NavLink >
        <NavLink to="https://github.com/FabricioReyna">
        <BiLogoGithub className="IconsStyles"/>
        </NavLink>
        <NavLink to="https://join.skype.com/invite/odNWiLRJrcKr">
        <BiLogoSkype className="IconsStyles"/>
        </NavLink>
      </div>
    </footer>
  );
};
export default FooterComp;
