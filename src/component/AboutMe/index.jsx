import { IoLogoGameControllerB } from "react-icons/io";
import { BiSolidCameraMovie, BiSolidPlaneAlt } from "react-icons/bi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { PiCarSimpleBold } from "react-icons/pi";
import {AiOutlineDownload} from "react-icons/ai"
import "./style.scss";
import { NavLink } from "react-router-dom";




const AboutMe = () => {
  return (
    <section className="sobremi" id="SobreMi">
      <div className="contenido-seccion">
        <h2>Sobre Mi</h2>
        <p>
          Hola, mi nombre es <span> Fabricio Reyna </span> y me dedico al Desarrollo Frontend.
          Poseo una amplia experiencia y habilidades en distintas tecnologías y
          lenguajes, incluyendo HTML, CSS, JavaScript, React, así como el uso de
          diversas librerías como Boostrap y Tailwind CSS. A lo largo de mi
          carrera como programador, he trabajado en la creación y diseño de
          interfaces de usuario, garantizando siempre la mejor experiencia para
          los usuarios finales. Mi objetivo principal es seguir aprendiendo y
          mejorando mis habilidades para estar al día con las últimas tendencias
          y tecnologías en el campo del Desarrollo Frontend. Estoy emocionado
          por seguir creciendo profesionalmente y enfrentar nuevos desafíos en
          esta apasionante área.
        </p>

        <div className="fila">
          {/* <!-- DATOS PERSONALES --> */}
          <div className="col">
            <h3>Datos Personales</h3>
            <ul>
              <li>
                <strong>Cumpleaños</strong>
                12-08-2003
              </li>
              <li>
                <strong>Telefono</strong>
                +54 3525434119
              </li>
              <li>
                <strong>Email</strong>
                fabricioreynacordes@gmail.com
              </li>
              <li>
                <strong>Website</strong>
                www.example.com
              </li>
              <li>
                <strong>Ubicacion</strong>
                Jesus Maria, Cordoba, Argentina
              </li>
              <li>
                <strong>Cargo</strong>
                <span>FREELANCER</span>
              </li>
            </ul>
          </div>
          {/* <!-- Intereses --> */}
          <div className="col">
            <h3>Intereses</h3>
            <div className="conenedor-intereses">
              <div className="intereses">
                <IoLogoGameControllerB className="IntestIcon" />
                JUEGOS
              </div>
              <div className="intereses">
                <BiSolidCameraMovie className="IntestIcon" />
                PELICULAS
              </div>
              <div className="intereses">
                <BsMusicNoteBeamed className="IntestIcon" />
                MUSICA
              </div>
              <div className="intereses">
                <BiSolidPlaneAlt className="IntestIcon" />
                VIAJAR
              </div>
              <div className="intereses">
                <MdOutlineSportsBasketball className="IntestIcon" />
                DEPORTES
              </div>
              <div className="intereses">
                <PiCarSimpleBold className="IntestIcon" />
                CARS
              </div>
            </div>
          </div>
        </div>
        <div className="contenido-descargar">
          <h2>Descargar cv</h2>
          <div className="seccion-descargar">
            <h4 className="title-hidden"> Español </h4>
            <button id="descargar">
            <NavLink to="./src/Doc/[ES]CV-Fabricio Reyna.pdf" target="_blank" download>
 <span className="Span-large"> Español / Spanish</span> 
           
              <AiOutlineDownload className="DowIcon"/>
</NavLink>
              <span className="overlay"></span>
            </button>
            <span className="or">or</span>
            <h4 className="title-hidden"> Ingles </h4>

            <button id="descargar">
            <NavLink to="./src/Doc/[ES]CV-Fabricio Reyna.pdf" target="_blank" download>
 <span className="Span-large"> Ingles / English</span>
 <AiOutlineDownload className="DowIcon"/>
</NavLink>

              <span className="overlay"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
