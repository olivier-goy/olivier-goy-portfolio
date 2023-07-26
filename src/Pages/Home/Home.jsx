import './Home.css';
import Card from '../../Components/Card/Card';
import CarouselProject from "../../Components/Carousel/CarouselProject/CarouselProject";
import CarouselProjectImage from "../../Components/Carousel/CarouselProjectImage/CarouselProjectImage"
import Modal from '../../Components/Modal/Modal';
import Tag from '../../Components/Tag/Tag';
import Presentation from '../../Components/Presentation/Presentation';
import Skill from '../../Components/Skill/Skill';
import { useEffect, useState } from 'react';





function Home() {

  const [isProfilData, setIsProfilData] = useState([])

  useEffect(() => {
    async function fetchProfil() {
      try {
        const response = await fetch('http://localhost:3000/Data/profil.json')
        const profilData = await response.json()
        setIsProfilData(profilData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProfil()
  }, [])

  return (
    <div className="home">
      <section>
        <Presentation />
      </section>
      <section>
        <div id="skills" className="skillSection">
          <h2>MES COMPETENCES</h2>
          <div className="divisionSkill">
            {
              isProfilData.map(skillProfil => (
                skillProfil.skills.map((profilData, index) => (
                < Skill
                  key={profilData + index}
                  logo={profilData.logoSkillUrl}
                  altSkill={profilData.altSkill}
                  title={profilData.titleSkill}
                  skillsList={profilData.listSkills}
                />
              ))
              ))
            }
          </div>
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
