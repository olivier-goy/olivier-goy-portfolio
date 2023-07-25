import "./Skill.css";

function Skill({logo, title, skillsList, altSkill}) {

    return (
        <div className="skill">
            <img src={logo} alt={altSkill} />
            <h3>{title}</h3>
            {skillsList.map((skillList, index) => (
                <p key={index + skillList}>{skillList}</p>
            ))}
        </div>
    )
}

export default Skill;