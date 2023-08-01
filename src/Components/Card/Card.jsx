import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import ReactModal from 'react-modal';
import Tag from "../Tag/Tag";
import "./Card.css";

function Card({ realization }) {

    const [IsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="cardProject">
            <div className="card" onClick={openModal}>
                <div className="cardImage">
                    <img src={realization.imageUrl} alt={"Image de présentation du site " + realization.title} />
                </div>
                <div className="cardDescription">
                    <div className="cardDescriptionTag">
                        {
                            realization.tools.map((tool, index) => (
                                <Tag
                                    key={index + tool}
                                    tool={tool}
                                />
                            ))
                        }
                    </div>
                    <div className="cardDescriptionTitle">
                        <h3>{realization.title}</h3>
                    </div>
                </div>
            </div>
            <div>
                <ReactModal
                    isOpen={IsOpen}
                    onRequestClose={closeModal}
                    className="Modal"
                >
                    <FontAwesomeIcon className="modalCrossClose" onClick={closeModal} icon={faXmark} size="2x" />
                    <Modal realization={realization} />
                </ReactModal>
            </div>
        </div>

    )
}

export default Card