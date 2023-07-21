import './Home.css'
import { FaUserGroup, FaCouch } from 'react-icons/fa6';

export default function Home(){

    return(
        <section className="home">
           
           <div className="textos">
                <h1>{'RENOVADORA RENOCLEAN'}</h1> 
                <h2>{'A NÚMERO UM EM LIMPEZA DE SOFÁS CARPETES E CORTINAS'}</h2>
                <p>{'Preocupada com a sustentabilidade, a Renovadora introduziu um conceito inovador na limpeza e higienização de sofás,\ncarpetes e cortinas com produtos de qualidade que não agridem o meio ambiente. Quer conhecer?'}</p>
                
                <div className="botoes">      
                    <a href="#"><button className="btn btn-primary">Sobre Nós<FaUserGroup className="icone"/></button></a>
                    <a href="#"><button className="btn btn-success">Contato<FaCouch className="icone last-icon"/></button></a>                    
                </div>                
           </div>

        </section>
    )
}