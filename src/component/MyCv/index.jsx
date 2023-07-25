import { NavLink } from "react-router-dom";
import "./style.scss";

const MeCv = () => {
  return (
    <section id="cv" className="cv">
      <div className="contenedor-cv">
        <h2>Curriculum</h2>
        <div className="fila">
          <div className="col izquierda">
            <h3 className="Title-cv">Educacion</h3>
            <div className="item izq">
              <h4>Técnico de Nivel Medio en Producción Agropecuaria.</h4>
              <span className="casa">Educacion Educativa Pio Leon</span>
              <span className="fecha">2016-2022</span>
              <p>
                El Técnico en Producción Agropecuaria al culminar el Nivel Medio
                orientado en Producción de Bienes y Servicios habrá desarrollado
                las siguientes competencias orientadas: Aplicar conocimientos de
                ciencias básicas (Física, Química y Matemática) en contextos
                productivos de diversa complejidad.
              </p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>

            <div className="item izq">
              <h4>Formacion Frontend</h4>
              <span className="casa">
                Domestika- AluraLatam+Oracle - CoderHouse
              </span>
              <span className="fecha">2019-2023</span>
              <p>
                Formacion Frontend conocer y desarrollar en ambitos de pagina
                web con la parte delantera denominada Frontend con el
                conocimiento de los lenguajes <b>HTML</b> - <b>CSS</b>,
                <b>JavaScript</b> y Etc.
              </p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>
            <div className="item izq">
              <h4>Excel-Nivel Avanzado</h4>
              <span className="casa">Universidad Tecnologia Nacional</span>
              <span className="fecha">2022-2022</span>
              <p>
                El uso avanzado de Excel permite realizar análisis estadísticos,
                funciones comparativas, y obtención de resultados específicos;
                así como un acercamiento a la programación.
              </p>
              <div className="conectori">
                <div className="circuloi"></div>
              </div>
            </div>
          </div>
          <div className="col derecha">
            <h3 className="Title-cv">Experencia de Trabajo</h3>
            <div className="item der">
              <h4>Pasantias no Rentadas</h4>
              <span className="casa">AgroEmpresa-CASEIH</span>
              <span className="fecha">Oct-2022</span>
              <p>
                Los alumnos del ultimo año de ambas especialidades se insertan
                en empresas de la zona y dan sus primeros pasos en el mundo
                laboral.
              </p>
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>

            <div className="item der">
                <NavLink to="https://www.linkedin.com/company/id-for-ideas/" className="NavlinkStyle">
              <h4>Centro de Formacion</h4>
              <span className="casa">IdforIdeas</span>
              <span className="fecha">Ene-2023-Mar-2023</span>
              <p>
                Brinda una experiencia enriquecedora y exitosa a quienes
                participen en sus programas de capacitación, y les permita dar
                el primer paso hacia una carrera exitosa en el mundo de la
                tecnología de la información.
              </p>
              </NavLink>
              
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
            <div className="item der">
                <NavLink to="https://www.linkedin.com/company/nocountrytalent/" className="NavlinkStyle">
              <h4>Centro de Formacion</h4>
              <span className="casa">NoCountry</span>
              <span className="fecha">Jun-2023</span>
              <p>
                Brinda una experiencia enriquecedora y exitosa a quienes
                participen en sus programas de capacitación, y les permita dar
                el primer paso hacia una carrera exitosa en el mundo de la
                tecnología de la información.
              </p>
              </NavLink>
              
              <div className="conectord">
                <div className="circulod"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MeCv;
