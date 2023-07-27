import Tag from "../Tag/Tag";
import "./Card.css";

function Card({ image, title, tools }) {
    return (
        <div className="card">
            <div className="cardImage">
                <img src={image} alt="" />
            </div>
            <div className="cardDescription">
                <div className="cardDescriptionTag">
                    {
                        tools.map((tool, index) => (
                            <Tag
                                key={index + tool}
                                tool={tool}
                            />
                        ))
                    }
                </div>
                <div className="cardDescriptionTitle">
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card