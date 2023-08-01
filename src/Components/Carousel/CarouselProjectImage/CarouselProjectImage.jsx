import { useState } from "react";
import arrowNext from "../../../Assets/fleche-next.png";
import arrowPrev from "../../../Assets/fleche-prev.png";
import "./CarouselProjectImage.css";

function CarouselProjectImage({ realizationImages, altImage }) {
    const [isIndexImage, setIsIndexImage] = useState(0)

    function nextIndexImage() {
        if (isIndexImage === realizationImages.length - 1) {
            return setIsIndexImage(0)
        }
        setIsIndexImage(isIndexImage + 1)

    }

    function prevIndexImage() {
        if (isIndexImage === 0) {
            return setIsIndexImage(realizationImages.length - 1)
        }
        setIsIndexImage(isIndexImage - 1)
    }
    return (
        <div>
            <div className="carouselStyle">
                <img src={realizationImages[isIndexImage]} className="pictureCarousel" alt={"Image de présentation du site " + altImage} />
                {
                    realizationImages.length > 1 &&
                    <div className="navCarousel">
                        <div className="prevCarouselStyle">
                            <img src={arrowPrev} onClick={prevIndexImage} alt="logo flèche en arrière" />
                        </div>
                        <span>{isIndexImage + 1}/{realizationImages.length}</span>
                        <div className="nextCarouselStyle">
                            <img src={arrowNext} onClick={nextIndexImage} alt="logo flèche en avant" />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CarouselProjectImage