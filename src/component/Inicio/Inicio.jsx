import { Link, NavLink } from "react-router-dom";
import "./Style.scss";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram, BiLogoSkype, BiLogoFacebookCircle } from "react-icons/bi";
const InicioPage = () => {
  return (
    <div  className="inicio" id="inicio">
      <div className="contenedor-banner">
        <div className="contenedor-img">
          <img src="https://res.cloudinary.com/dhb9rdaoc/image/upload/v1690335910/FabriIIcon.jpg" alt="bg" />
        </div>
        <h1>Fabricio Reyna</h1>
        <h2>Desarrollador Frontend </h2>
        <div className="redes">
          <NavLink to="https://www.facebook.com/fabricio.reyna2/">
            {" "}
            <BiLogoFacebookCircle className="IconsStyles" />{" "}
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/fabridevtoll/">
            {" "}
            <BiLogoLinkedin className="IconsStyles" />{" "}
          </NavLink>
          <NavLink to="https://www.instagram.com/frontend_boantek/">
            <BiLogoInstagram className="IconsStyles"/>
          </NavLink>
          <NavLink to="https://github.com/FabricioReyna">
            <BiLogoGithub className="IconsStyles"/>
          </NavLink>
          <NavLink to="https://join.skype.com/invite/odNWiLRJrcKr">
            <BiLogoSkype className="IconsStyles"/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default InicioPage;
