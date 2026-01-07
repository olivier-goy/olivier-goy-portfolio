import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import imageProfil from "../../Assets/Photo-de-profil.webp";
import "./Banner.css";

function Presentation() {
  const lines = [
    "Bonjour et bienvenue,",
    "Je suis Olivier GOY",
    "Développeur web Fullstack",
  ];

  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
  let timeout;

  const type = () => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    const currentChar = currentLine.charAt(charIndex);

    // Couleur : première ligne noire, reste gris
    const color = lineIndex === 0 ? "black" : "gray";

    setText(
      (prev) => prev + `<span style="color:${color}">${currentChar}</span>`
    );

    let nextLineIndex = lineIndex;
    let nextCharIndex = charIndex + 1;

    if (nextCharIndex >= currentLine.length) {
      nextCharIndex = 0;
      nextLineIndex += 1;

      if (nextLineIndex < lines.length) {
        setText((prev) => prev + "<br />");
      }
    }

    timeout = setTimeout(() => {
      setLineIndex(nextLineIndex);
      setCharIndex(nextCharIndex);
    }, 30);
  };

    timeout = setTimeout(type, 30);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [lineIndex, charIndex]);

  return (
    <div className="banner">
      <div className="innerBanner">
        <div className="sectionImage">
          <img
            src={imageProfil}
            alt="Représentation profil Olivier GOY développeur web"
          />
        </div>
        <div className="sectionTitle">
          <h1>
            <span dangerouslySetInnerHTML={{ __html: text }}></span>
            <span className="cursor">|</span>
          </h1>
        </div>
      </div>
      <div className="iconBanner">
        <p>Poursuivre</p>
        <FontAwesomeIcon icon={faArrowDown} size="2x" />
      </div>
    </div>
  );
}

export default Presentation;
