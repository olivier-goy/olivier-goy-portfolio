import "./CarouselProject.css";
import Card from "../../Card/Card"
import logoArrowNext from "../../../Assets/fleche-next.png";
import logoArrowPrev from "../../../Assets/fleche-prev.png";

function CarouselProject() {
    return (
        <div className="carouselProject">
            <div className="carouselProjectPrev">
                <img src={logoArrowPrev} alt="icon flêche précédente" />
            </div>
            <div className="carouselProjectMain">
                <Card />
                <Card />
                <Card />
            </div>
            <div className="carouselPorjectNext">
                <img src={logoArrowNext} alt="icon flêche suivante" />
            </div>
        </div>
    )
}

export default CarouselProject