import './Menu.css'
import { FaHouse,FaIdCard,FaUserGroup,FaCouch,FaCamera,FaVideo,FaEnvelopeCircleCheck,FaFileLines } from 'react-icons/fa6'; 

export default function Menu(){

    return(
        <div className="menu-nav">
            <ul className='area-item'>

                <a href="/"><li className='item'><FaHouse className='icone'/>Home</li></a>                
                <a href="/"><li className='item'><FaUserGroup className='icone'/>Empresa</li></a>                
                <a href="/"><li className='item'><FaCouch className='icone'/>Serviços</li></a>                
                <a href="/"><li className='item'><FaCamera className='icone'/>Fotos</li></a>                
                <a href="/"><li className='item'><FaVideo className='icone'/>Vídeos</li></a>                
                <a href="/"><li className='item'><FaEnvelopeCircleCheck className='icone'/>Contato</li></a>                
                <a href="/"><li className='item'><FaFileLines className='icone'/>Política Privacidade</li></a>

            </ul>
        </div>
    )

}