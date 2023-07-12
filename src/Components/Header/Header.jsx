import "./Header.css";
import icon from "../../Assets/iconHeader.png"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="header">
                <div className="iconHeader">
                    <img src={icon} alt="Icon site" />
                </div>
                <div className="navHeader">
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "pending"} reloadDocument>
                        ACCUEIL
                    </NavLink>
                    <a href="#skills" className="pending">
                        COMPETENCE
                    </a>
                    <a href="#abouts" className="pending">
                        A-PROPOS
                    </a>
                    <a href="#Realisations" className="pending">
                        REALISATIONS
                    </a>
                    <a href="#cv" className="pending">
                        CV
                    </a>
                    <a href="#contact" className="pending">
                        CONTACT
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header