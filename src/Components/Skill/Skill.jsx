import "./Skill.css";

function Skill({logo, title, skillsList, altSkill}) {

    return (
        <div className="skill">
            <img src={logo} alt={altSkill} />
            <h3>{title}</h3>
            {skillsList.map((skillList, index) => (
                <h4 key={index + skillList}>{skillList}</h4>
            ))}
        </div>
    )
}

export default Skill