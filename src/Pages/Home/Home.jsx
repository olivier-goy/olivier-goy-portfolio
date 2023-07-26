import './Home.css';
import Card from '../../Components/Card/Card';
import CarouselProject from "../../Components/Carousel/CarouselProject/CarouselProject";
import CarouselProjectImage from "../../Components/Carousel/CarouselProjectImage/CarouselProjectImage"
import Modal from '../../Components/Modal/Modal';
import Tag from '../../Components/Tag/Tag';
import Banner from '../../Components/Banner/Banner';
import Skill from '../../Components/Skill/Skill';
import { useEffect, useState } from 'react';
import About from '../../Components/About/About';





function Home() {

  const [isDataLoading, setIsDataLoading] = useState(false)
  const [isProfilData, setIsProfilData] = useState([])

  useEffect(() => {
    async function fetchProfil() {
      try {
        const response = await fetch('http://localhost:3000/Data/profil.json')
        const profilsData = await response.json()
        await profilsData.map(profilData => setIsProfilData(profilData))
        setIsDataLoading(true)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProfil()
  }, [])

  return isDataLoading ? (
    <div className="home">
      <section>
        <Banner />
      </section>
      <section>
        <div id="skills" className="skillSection">
          <h2>MES COMPETENCES</h2>
          <div className="divisionSkill">
            {
                isProfilData.skills.map((profilData, index) => (
                < Skill
                  key={profilData + index}
                  logo={profilData.logoSkillUrl}
                  altSkill={profilData.altSkill}
                  title={profilData.titleSkill}
                  skillsList={profilData.listSkills}
                />
              ))
            }
          </div>
        </div>
      </section>
      <section>
        <About
          descriptionText={isProfilData.description}
          trainningText={isProfilData.trainning}
        />
      </section>
      <Card />
      <CarouselProject />
      <CarouselProjectImage />
      <Modal />
      <Tag />
    </div>
  ) : (
      <div>
        <p>Chargement de la page</p>
      </div>
  );
}

export default Home
