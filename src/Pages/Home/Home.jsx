import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import Card from '../../Components/Card/Card';
import CarouselProject from "../../Components/Carousel/CarouselProject/CarouselProject";
import CarouselProjectImage from "../../Components/Carousel/CarouselProjectImage/CarouselProjectImage"
import Modal from '../../Components/Modal/Modal';
import Tag from '../../Components/Tag/Tag';
import imageProfil from "../../Assets/Photo-de-profil.jpg"


function Home() {
  return (
    <div className="home">
      <section>
        <div className="homeFirstSection">
          <div className="sectionImage">
            <img src={imageProfil} alt="Représentation profil Olivier GOY développeur web" />
          </div>
          <div className="sectionTitle">
            <h1>Bonjour et bienvenue,
              <br />
              <span className="spanTitle">
                Je suis Olivier GOY
                <br />
                Développeur Web Fullstack</span>
            </h1>
          </div>
        </div>
        <div className="iconFirstSection">
          <p>Poursuivre</p>
          <FontAwesomeIcon icon={faArrowDown} size="2x" />
        </div>
      </section>
      <Card />
      <CarouselProject />
      <CarouselProjectImage />
      <Modal />
      <Tag />
    </div>
  );
}

export default Home
