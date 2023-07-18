import './Menu.css'
import { FaHouse,FaIdCard,FaUserGroup,FaCouch,FaCamera,FaVideo,FaEnvelopeCircleCheck,FaFileLines } from 'react-icons/fa6'; 

export default function Menu(){

    return(
        <div className="menu-nav">
            <ul className='area-item'>

                <FaHouse className='icone'/> 
                <a href="/"><li className='item'>Home</li></a>

                <FaUserGroup className='icone'/> 
                <a href="/"><li className='item'>Empresa</li></a>

                <FaCouch className='icone'/> 
                <a href="/"><li className='item'>Serviços</li></a>

                <FaCamera className='icone'/> 
                <a href="/"><li className='item'>Fotos</li></a>

                <FaVideo className='icone'/> 
                <a href="/"><li className='item'>Vídeos</li></a>

                <FaEnvelopeCircleCheck className='icone'/> 
                <a href="/"><li className='item'>Contato</li></a>

                <FaFileLines className='icone'/> 
                <a href="/"><li className='item'>Política Privacidade</li></a>

            </ul>
        </div>
    )

}