import { NavLink } from "react-router-dom";
import "./style.scss";

const MePorta = () => {
    return(
        <section id="Protafolio" className="Portafolio">
        <div className="contenedor-portafolio">
          <h2>Portafolio</h2>
          <h3>Ultimas actualizaciones...</h3>
          <div className="galeria">
            <div className="proyecto">
            <NavLink href="https://illustrious-medovik-87eb50.netlify.app/" target="_blank" >
             
              <img src="https://res.cloudinary.com/dhb9rdaoc/image/upload/v1690336622/zpqgitf3o8k94ezef41n.png" alt="a" />
              <div className="overlay">
                  <h4>Eccomerce React</h4>
                  <p>Vista Previa</p>
                
              </div>
              </NavLink>
            </div>
            <div className="proyecto">
              <img src="https://res.cloudinary.com/dhb9rdaoc/image/upload/v1690335908/isuzf59z2hbiejz6nh1g.png" alt="a" />
              <div className="overlay">
                <NavLink to="https://loginformneo.netlify.app/" target="_blank">
                  <h4>LoginFrom</h4>
                  <p>Vista Previa</p>
                </NavLink>
              </div>
            </div>
            <div className="proyecto">
            <NavLink to="https://musicwebboantek.netlify.app/" target="_blank">
             
              <img src="https://res.cloudinary.com/dhb9rdaoc/image/upload/v1690335910/u6qwfatppu21rfexyyjs.png" alt="a" />
              <div className="overlay">
                  <h4>Music JavaScript</h4>
                  <p>Vista Previa</p>
                
              </div>
              </NavLink>
            </div>
            <div className="proyecto">
            <NavLink to="https://c12-accessbank.vercel.app/" target="_blank">
              <img src="https://res.cloudinary.com/dhb9rdaoc/image/upload/v1690335909/AccesLandig.png" alt="a" />
              <div className="overlay">
                
                  <h4>AccesBank</h4>
                  <p>Vista Previa</p>
                
              </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    )
}
export default MePorta