import './Home.css';
import Card from '../../Components/Card/Card';
import CarouselProject from "../../Components/Carousel/CarouselProject/CarouselProject";
import CarouselProjectImage from "../../Components/Carousel/CarouselProjectImage/CarouselProjectImage"


function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Card />
      <CarouselProject />
      <CarouselProjectImage />
    </div>
  );
}

export default Home
