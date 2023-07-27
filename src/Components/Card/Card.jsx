import Tag from "../Tag/Tag";
import "./Card.css";

function Card() {
    return (
        <div className="card">
            <div className="cardImage">

            </div>
            <div className="cardDescription">
                <Tag />
            </div>
        </div>
    )
}

export default Card