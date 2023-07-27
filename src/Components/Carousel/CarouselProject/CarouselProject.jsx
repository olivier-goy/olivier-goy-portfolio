import "./CarouselProject.css";
import Card from "../../Card/Card"
import logoArrowNext from "../../../Assets/fleche-next.png";
import logoArrowPrev from "../../../Assets/fleche-prev.png";

function CarouselProject({ realizations }) {
    const threeRealization = realizations.slice(0, 3)
    return (
        <div className="carouselProject">
            <div className="carouselProjectPrev">
                <img src={logoArrowPrev} alt="icon flêche précédente" />
            </div>
            <div className="carouselProjectMain">
                {
                    threeRealization.map((realization, index) => (
                        <Card
                            key={index + realization.title}
                            title={realization.title}
                            tools={realization.tools}
                        />
                    ))
                }
            </div>
            <div className="carouselProjectNext">
                <img src={logoArrowNext} alt="icon flêche suivante" />
            </div>
        </div>
    )
}

export default CarouselProject