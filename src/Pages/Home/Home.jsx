import './Home.css';
import Card from '../../Components/Card/Card';
import CarouselProject from "../../Components/Carousel/CarouselProject/CarouselProject";
import CarouselProjectImage from "../../Components/Carousel/CarouselProjectImage/CarouselProjectImage"
import Modal from '../../Components/Modal/Modal';
import Tag from '../../Components/Tag/Tag';
import Presentation from '../../Components/Presentation/Presentation';
import Skill from '../../Components/Skill/Skill';


function Home() {
  return (
    <div className="home">
      <section>
       <Presentation />
      </section>
      <section>
        <Skill />
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
