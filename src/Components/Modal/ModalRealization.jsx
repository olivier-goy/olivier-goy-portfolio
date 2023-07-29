import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import CarouselProjectImage from "../Carousel/CarouselProjectImage/CarouselProjectImage";
import Tag from "../Tag/Tag";
import "./ModalRealization.css";



function ModalRealization({ realization }) {

    return (
        <div>
            <div className="modalTitle">
                <h2>{realization.title}</h2>
            </div>
            <div className="modalCarousel">
                <CarouselProjectImage
                    realizationImages={realization.imagesUrl}
                    altImage={realization.title}
                />
                <div className="modalCarouselTag">
                    {
                        realization.tools.map((tool, index) => (
                            <Tag key={index + tool} tool={tool} />
                        ))
                    }
                </div>
            </div>
            <div className="modalDescription">
                <h3>Description</h3>
                <p>{realization.description}</p>
            </div>
            <div className="modalLink">
                {
                    realization.linkGitHub ? (
                        <div className="link">
                            <a href={realization.linkGitHub} target="_blank" rel="noreferrer">
                                <div className="linkIcon">
                                    <FontAwesomeIcon icon={faGithub} size="4x"/>
                                </div>
                                <div className="linkText">
                                    <p>Consultez mon repository GitHub</p>
                                </div>
                            </a>
                        </div>
                    ) : (<div className="link"></div>)
                }
                {
                    realization.linkWebSite ? (
                        <div className="link">
                            <a href={realization.linkWebSite} target="_blank" rel="noreferrer">
                                <div className="linkText">
                                    <p>Visitez ce site</p>
                                </div>
                                <div className="linkIcon">
                                <FontAwesomeIcon icon={faGlobe} size="4x" />
                                </div>
                            </a>
                        </div>) : (<div className="link"></div>)
                }
            </div>
        </div>
    )
}

export default ModalRealization