import { FaHouse, FaIdCard, FaUserGroup, FaCouch, FaCamera, FaVideo, FaEnvelopeCircleCheck, FaFileLines, FaLock } from 'react-icons/fa6';
import './Header.css'
import Logo from '../logo/Logo'

export default function Header() {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-0 ">           
          <div className="container">        
            <Logo />
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>            

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">                  
                  <a className="nav-link active" aria-current="page" href="#"><FaHouse className="icone"/>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><FaUserGroup className="icone"/>Empresa</a>
                </li>           
                <li className="nav-item">
                  <a className="nav-link" href="#"><FaCouch className="icone"/>Serviços</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><FaCamera className="icone"/>Fotos</a>
                </li>           
                <li className="nav-item">
                <a className="nav-link" href="#"><FaVideo className="icone"/>Vídeos</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#"><FaEnvelopeCircleCheck className="icone"/>Contato</a>
                </li>           
                <li className="nav-item">
                <a className="nav-link" href="#"><FaIdCard className="icone"/>Política Privacidade</a>
                </li>           
                
              </ul>         
            </div>
            </div>          
        </nav>
      )
}