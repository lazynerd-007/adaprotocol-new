import './header.scss'
import logo from "../assets/images/connect.svg"
const Header = () => {
    return (
        <>
            <div className='header-nav'>
                <img src={logo}  alt="logo"/>
            </div>
        </>
    )
}

export default Header