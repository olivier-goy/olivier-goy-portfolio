import './Home.css';
import Card from '../../Components/Card/Card';
import CarouselProject from "../../Components/Carousel/CarouselProject/CarouselProject";
import CarouselProjectImage from "../../Components/Carousel/CarouselProjectImage/CarouselProjectImage"
import Modal from '../../Components/Modal/Modal';
import Tag from '../../Components/Tag/Tag';


function Home() {
  return (
    <div className="home">
      <section>
        <div>

        </div>
        <div>
          <h1>Bonjour et bienvenu,<span>Je suis Olivier GOY Développeur Web Fullstack</span></h1>

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
