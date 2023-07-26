import "./About.css";

function About({ descriptionText, trainningText }) {
    return (
        <div id="abouts" className="aboutSection">
            <h2>A PROPOS DE MOI</h2>
            <p>{descriptionText}</p>
            <p className="aboutLastParagraph">{trainningText}</p>
        </div>
    )
}

export default About