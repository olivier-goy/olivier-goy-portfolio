import Tag from "../Tag/Tag";
import "./Card.css";

function Card({title, tools}) {
    return (
        <div className="card">
            <div className="cardImage">

            </div>
            <div className="cardDescription">
                {tools.map(tool => (
                    <Tag tool={tool} />
                ))

                }
                {title}
            </div>
        </div>
    )
}

export default Card