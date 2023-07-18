import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import './Header.css'

export default function Header(){

    return(

        <div className='header container' >
           <Logo />
           <Menu />
        </div>

    )

}