import './Home.css';
import Card from '../../Components/Card/Card';
import CarouselProject from "../../Components/Carousel/CarouselProject/CarouselProject"

function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Card />
      <CarouselProject />
    </div>
  );
}

export default Home
