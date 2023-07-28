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

function Card({ realizationId, image, title, tools }) {

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
                    <img src={image} alt="" />
                </div>
                <div className="cardDescription">
                    <div className="cardDescriptionTag">
                        {
                            tools.map((tool, index) => (
                                <Tag
                                    key={index + tool}
                                    tool={tool}
                                />
                            ))
                        }
                    </div>
                    <div className="cardDescriptionTitle">
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
            <div>
                {console.log(modalIsOpen)}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <ModalRealization />
                    <h2>{realizationId}</h2>
                    <button onClick={closeModal}>close</button>
                </Modal>
            </div>
        </div>

    )
}

export default Card