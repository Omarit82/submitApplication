import { Link } from "react-router-dom";

export const Footer = ()=>{

    return(
        <footer>
            <div className="p-5">
                <h3>Done by Omar Roselli</h3>
                <h4><Link to="https://www.linkedin.com/in/omar-roselli/">linkedin</Link></h4>
            </div>
        </footer>
    )
}