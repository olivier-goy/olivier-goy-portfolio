import CarouselProjectImage from "../Carousel/CarouselProjectImage/CarouselProjectImage";
import "./ModalRealization.css";

function ModalRealization({Realization}) {

    return (
        <div className="testModal">
            {console.log(Realization)}
            <CarouselProjectImage
                realizationImages={Realization.imagesUrl}
                altImage={Realization.title}
            />
           <p>COPUCOU</p>
        </div>
    )
}

export default ModalRealization