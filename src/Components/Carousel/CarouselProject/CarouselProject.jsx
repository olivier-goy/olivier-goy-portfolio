import "./CarouselProject.css";
import Card from "../../Card/Card"
import logoArrowNext from "../../../Assets/fleche-next.png";
import logoArrowPrev from "../../../Assets/fleche-prev.png";
import { useState } from "react";

function CarouselProject({ realizations }) {

    const [isIndex, setIsIndex] = useState(0)

    function nextIndex() {
        if (isIndex + 3 === realizations.length) {
            return setIsIndex(0)
        } else {

            setIsIndex(isIndex + 1)
        }
    }

    function prevIndex() {
        if (isIndex === 0) {
            return setIsIndex(realizations.length - 3)
        }
        setIsIndex(isIndex - 1)
    }
    const threeRealization = realizations.slice(isIndex, isIndex + 3)

    return (
        <div className="carouselProject">
            <div className="carouselProjectPrev" onClick={prevIndex}>
                <img src={logoArrowPrev} alt="icon flêche précédente" />
            </div>
            <div className="carouselProjectMain">
                {
                    threeRealization.map((realization, index) => (
                        <Card
                            key={index + realization.title}
                            realization={realization}
                        />
                    ))
                }
            </div>
            <div className="carouselProjectNext">
                <img src={logoArrowNext} onClick={nextIndex} alt="icon flêche suivante" />
            </div>
        </div>
    )
}

export default CarouselProject