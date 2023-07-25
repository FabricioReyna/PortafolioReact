import "./style.scss";
import {FaTelegramPlane} from "react-icons/fa"
import {BiSolidLocationPlus} from "react-icons/bi"
import {AiOutlinePhone} from "react-icons/ai"
import {BiEnvelope} from "react-icons/bi"

const regexPatterns = {
    nombre: /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}/,
    correo: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    telefono: /^[0-9]{8,15}$/,
    mensaje: /^.{10,200}$/
  };

  
const MeContact = () => {
    
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "nombre" || name === "tema") {
          // Limitar a caracteres permitidos para nombre y tema
          if (regexPatterns.nombre.test(value)) {
            setFormData((prevData) => ({
              ...prevData,
              [name]: value
            }));
          }
        } else {
          // Para el resto de los campos, simplemente actualizar el estado
          setFormData((prevData) => ({
            ...prevData,
            [name]: value
          }));
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario, por ejemplo, mediante una solicitud HTTP
        // utilizando fetch o axios.
        console.log("Datos del formulario:", formData);
      };
    return(
        <section id="Contacto" className="contacto">
      <div className="contenido-contacto">
        <h2>Contacto</h2>
        <div className="fila">
          {/* <!-- Formulario --> */}
          <div className="col">
            <form onSubmit={handleSubmit} action="https://formspree.io/f/maykrjny" method="POST">
            <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={handleChange}
            pattern={regexPatterns.nombre.source}
            required
          />
          <input
            type="tel"
            placeholder="Numero de Telefono"
            name="telefono"
            onChange={handleChange}
            pattern={regexPatterns.telefono.source}
            required
          />
          <input
            type="email"
            placeholder="Direccion de correo"
            name="correo"
            onChange={handleChange}
            pattern={regexPatterns.correo.source}
            required
          />
          <input
            type="text"
            placeholder="Tema"
            name="tema"
            onChange={handleChange}
            required
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Mensaje"
            name="mensaje"
            onChange={handleChange}
            pattern={regexPatterns.mensaje.source}
            required
          ></textarea>
          <button type="submit">
            Enviar Mensaje <FaTelegramPlane className="IconEnviar" />
            <span className="overlay"></span>
          </button>
            </form>
            <span className="warnings" id="warnings"></span>
          </div>
          {/* <!-- Mapa --> */}
          <div className="col col-responsive ">
            <div className="info">
              <div className="Info-content">
              <ul>
                <li>
                  <BiSolidLocationPlus className="InfoIcon"/>
                  <span>

                  Calle 935,Jesus Maria, Cordoba, Argentina
                  </span>
                </li>
                <li>
                  <AiOutlinePhone className="InfoIcon"/>
                  <span>
                  +54 3525 434119

                  </span>
                </li>
                <li>
                  <BiEnvelope className="InfoIcon"/>
                  <span>
                  fabricioreynacordes@gmail.com

                  </span>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default MeContact