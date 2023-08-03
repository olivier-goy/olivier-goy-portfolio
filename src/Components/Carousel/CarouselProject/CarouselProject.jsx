import "./CarouselProject.css";
import Card from "../../Card/Card"
import logoArrowNext from "../../../Assets/fleche-next.png";
import logoArrowPrev from "../../../Assets/fleche-prev.png";
import { useEffect, useState } from "react";

function CarouselProject({ realizations }) {

    const [isIndex, setIsIndex] = useState(0)
    const [windowSize, setWindowSize] = useState(getSize)

    function getSize() {
        return window.innerWidth
    }

    function nextIndex() {
        if (windowSize <= 850) {
            if (isIndex === realizations.length - 1) {
                return setIsIndex(0)
            }
        } else if (windowSize <= 1300) {
            if (isIndex + 2 === realizations.length) {
                return setIsIndex(0)
            }
        } else if (isIndex + 3 === realizations.length) {
            return setIsIndex(0)
        }
        setIsIndex(isIndex + 1)
    }

    function prevIndex() {
        if (isIndex === 0) {
            if (windowSize <= 850) {
                return setIsIndex(realizations.length - 1)
            }
            if (windowSize <= 1300) {
                return setIsIndex(realizations.length - 2)
            }
            return setIsIndex(realizations.length - 3)
        }
        setIsIndex(isIndex - 1)
    }

    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize())
        }

        if (windowSize <= 850) {
            setIsIndex((prevIndex) => Math.min(prevIndex, realizations.length - 1));
        } else if (windowSize <= 1300) {
            setIsIndex((prevIndex) => Math.min(prevIndex, realizations.length - 2));
        } else {
            setIsIndex((prevIndex) => Math.min(prevIndex, realizations.length - 3));
        }
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowSize, realizations])

    const cardRealization = windowSize <= 850 ? [realizations[isIndex]] : windowSize <= 1300 ? realizations.slice(isIndex, isIndex + 2) : realizations.slice(isIndex, isIndex + 3)

    return (
        <div className="carouselProject">
            <div className="carouselProjectPrev" onClick={prevIndex}>
                <img src={logoArrowPrev} alt="icon flèche précédente" />
            </div>
            <div className="carouselProjectMain">
                {
                    cardRealization.map((realization, index) => (
                        <Card
                            key={index + realization.title}
                            realization={realization}
                        />
                    ))
                }
            </div>
            <div className="carouselProjectNext">
                <img src={logoArrowNext} onClick={nextIndex} alt="icon flèche suivante" />
            </div>
        </div>
    )
}

export default CarouselProject