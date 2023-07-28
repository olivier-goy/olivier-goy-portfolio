import { useState } from "react";
import ModalRealization from "../Modal/ModalRealization";
import Modal from 'react-modal';
import Tag from "../Tag/Tag";
import "./Card.css";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      borderRadius: '20px'
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
        <div className="carouselProjectMain">
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
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <ModalRealization Realization={realization} />
                    <h2>{realization.id}</h2>
                    <button onClick={closeModal}>close</button>
                </Modal>
            </div>
        </div>

    )
}

export default Card