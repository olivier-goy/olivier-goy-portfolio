import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import imageProfil from "../../Assets/Photo-de-profil.webp";
import "./Banner.css"

function Presentation() {
    return (
        <div className="banner">
            <div className="innerBanner">
                <div className="sectionImage">
                    <img src={imageProfil} alt="Représentation profil Olivier GOY développeur web" />
                </div>
                <div className="sectionTitle">
                    <h1>
                        <span>Bonjour et bienvenue,</span>
                        <br />
                        <span className="spanTitle">Je suis Olivier GOY</span>
                        <br />
                        <span className="spanTitle">Développeur Web Fullstack</span>
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