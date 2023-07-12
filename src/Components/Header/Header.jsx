import "./Header.css";
import icon from "../../Assets/iconHeader.png"

function Header() {
    return (
        <div className="header">
            <div className="iconHeader">
                <img src={ icon } alt="Icon site" />
            </div>
            <div className="navHeader">
                <div>
                    ACCUEIL
                </div>
                <div>
                    COMPETENCE
                </div>
                <div>
                    A-PROPOS
                </div>
                <div>
                    REALISATIONS
                </div>
                <div>
                    CV
                </div>
                <div>
                    CONTACT
                </div>
            </div>
        </div>
    )
}

export default Header