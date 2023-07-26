import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import imageProfil from "../../Assets/Photo-de-profil.jpg";
import "./Presentation.css"

function Presentation() {
    return (
        <div className="presentation">
            <div className="banner">
                <div className="sectionImage">
                    <img src={imageProfil} alt="Représentation profil Olivier GOY développeur web" />
                </div>
                <div className="sectionTitle">
                    <h1>Bonjour et bienvenue,
                        <br />
                        <span className="spanTitle">
                            Je suis Olivier GOY
                            <br />
                            Développeur Web Fullstack</span>
                    </h1>
                </div>
            </div>
            <div className="iconBanner">
                <p>Poursuivre</p>
                <FontAwesomeIcon icon={faArrowDown} size="2x" />
            </div>
        </div>
    )
}

export default Presentation