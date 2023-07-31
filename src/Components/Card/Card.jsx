import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import ReactModal from 'react-modal';
import Tag from "../Tag/Tag";
import "./Card.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: "80%",
        height: "90%",
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        border: "3px solid #94D25A",
        padding: "0"
    },
};

function Card({ realization }) {

    const [modalIsOpen, setIsOpen] = useState(false);

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
                    <img src={realization.imageUrl} alt="" />
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
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <FontAwesomeIcon className="modalCrossClose" onClick={closeModal} icon={faXmark} size="2x" />
                    <Modal realization={realization} />
                </ReactModal>
            </div>
        </div>

    )
}

export default Card