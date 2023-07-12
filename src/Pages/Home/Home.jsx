import './Home.css';
import Card from '../../Components/Card/Card';
import CarouselProject from "../../Components/Carousel/CarouselProject/CarouselProject";
import CarouselProjectImage from "../../Components/Carousel/CarouselProjectImage/CarouselProjectImage"
import Modal from '../../Components/Modal/Modal';


function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Card />
      <CarouselProject />
      <CarouselProjectImage />
      <Modal />
    </div>
  );
}

export default Home
