import { Link } from "react-router-dom";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = ()=>{

    return(
        <footer className="d-flex justify-content-between">
            <div className="p-5">
                <h3>Done by Omar Roselli</h3>
                <h4><Link to="https://www.linkedin.com/in/omar-roselli/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center"><FaLinkedin size={30} className="me-3"/>Linkedin</Link></h4>
                <h4><Link to="https://www.github.com/Omarit82"target="_blank" rel="noopener noreferrer" className="d-flex align-items-center"><FaGithub size={30} className="me-3" />Github</Link></h4>
            </div>
            <div className="p-5">
                <h4><LuMail size={30} color="darkblue" /> roselliomar82@gmail.com</h4>
                <h4><LuPhone size={30} color="darkblue" /> +5492234379450</h4>
                <h4><LuMapPin size={30} color="darkblue" /> Mar del Plata, Buenos Aires, Argentina</h4>
            </div>
        </footer>
    )
}