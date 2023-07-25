import '../src/styles/IncioApp.scss'
import InicioPage from './component/Inicio/Inicio'
import AboutMe from './component/AboutMe'
import MeSkills from './component/Skills'
import MeCv from './component/MyCv'
import MePorta from './component/Portafolio'
import MeContact from './component/ContactUs'
import NavBarCom from './component/NavBar'
import FooterComp from './component/Footer'

function App() {

  return (
    
       <div id="Body" className="Dark">
   <NavBarCom/>
     <InicioPage/>
     <AboutMe/>
    <MeSkills/>
    <MeCv/>
    <MePorta/>
    <MeContact/>
    <FooterComp/>
  </div>
    
  )
}

export default App
