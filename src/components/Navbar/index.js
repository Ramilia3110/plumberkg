import {BsFillTelephoneForwardFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import "./styles.scss"

const Navbar = () => {
    return (
        <div>
            <nav>
            <h1 className="logo">Plumber</h1>
            <div className="contact-link">
               <a href="tel:+787878"><BsFillTelephoneForwardFill className="contact-icon"/></a> 
               <a href="mailto:123@gmail.com"><MdEmail className="contact-icon mail-icon"/></a>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
