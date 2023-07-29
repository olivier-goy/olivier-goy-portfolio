import "./Footer.css";
import logoEmail from "../../Assets/e-mail.png";
import logoGithub from "../../Assets/logoGithub.png";
import logoLinkedin from "../../Assets/logoLinkedin.png";

function Footer() {
    return (
        <div className="footer">
            <div className="footerLink">
                <a href="mailto:contact@oliviergoy.dev"><img src={logoEmail} alt="logo email" /></a>
                <a href="https://github.com/olivier-goy" className="logoGithub" target="_blank" rel="noreferrer"><img src={logoGithub} alt="logo GitHub" /></a>
                <a href="https://www.linkedin.com/in/olivier-goy/" target="_blank" rel="noreferrer"><img src={logoLinkedin} alt="logo Linkedin" /></a>
            </div>
            <div>
                <h2>Réalisé par Olivier GOY</h2>
            </div>
        </div>
    )
}

export default Footer