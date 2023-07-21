import logo from '../../assets/images/logo.png'
import './Logo.css'

export default function Logo(){
    return(
        <>
            <a href="/"><img src={logo} alt="Logo da empresa" /></a>
        </>
    )
}