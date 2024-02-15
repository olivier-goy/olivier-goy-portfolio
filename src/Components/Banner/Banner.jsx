import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import imageProfil from "../../Assets/Photo-de-profil.webp";
import "./Banner.css"

function Presentation() {

    const lines = [
        "Bonjour et bienvenu,",
        "Je suis Olivier GOY",
        "Développeur web Fullstack"
    ];

    const [text, setText] = useState('')
    const [lineIndex, setLineIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const typingRef = useRef(null)

    useEffect(() => {
        
        typingRef.current = setInterval(() => {

            if (lineIndex === lines.length && charIndex === 0) {
                clearInterval(typingRef.current)
                return
            }

            const currentLine = lines[lineIndex];
            const currentChar = currentLine.charAt(charIndex);

            if (lineIndex >= lines.length - 2) {
                setText(prevText => prevText + `<span style="color: gray">${currentChar}</span>`);
            } else {
                setText(prevText => prevText + currentChar);
            }

            setCharIndex(prevCharIndex => {
                let newIndex = prevCharIndex + 1;
                if (newIndex > currentLine.length) {
                    newIndex = 0;
                    setLineIndex(prevLineIndex => prevLineIndex + 1);
                    setText(prevText => prevText + '<br />');
                }
                return newIndex;
            });
        }, 50);

        return () => clearInterval(typingRef.current);
        // eslint-disable-next-line
    }, [lineIndex, charIndex]);

    return (
        <div className="banner">
            <div className="innerBanner">
                <div className="sectionImage">
                    <img src={imageProfil} alt="Représentation profil Olivier GOY développeur web" />
                </div>
                <div className="sectionTitle">
                    <h1 dangerouslySetInnerHTML={{ __html: text }}></h1>
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