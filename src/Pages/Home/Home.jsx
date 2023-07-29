import './Home.css';
import CarouselProject from "../../Components/Carousel/CarouselProject/CarouselProject";
import Banner from '../../Components/Banner/Banner';
import Skill from '../../Components/Skill/Skill';
import { useEffect, useState } from 'react';
import About from '../../Components/About/About';





function Home() {

  const [isDataLoading, setIsDataLoading] = useState(false)
  const [isProfilData, setIsProfilData] = useState([])
  const [isRealizationData, setIsRealizationData] = useState([])

  useEffect(() => {
    async function fetchProfil() {
      try {
        const response = await fetch('https://oliviergoy.dev/Data/profil.json')
        const profilData = await response.json()
        setIsProfilData(profilData)
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
      <section>
        <div id="realizations" className="sectionRealization">
          <h2>MES REALISATIONS</h2>
          <CarouselProject realizations={isRealizationData} />
        </div>
      </section>
    </div>
  ) : (
    <div>
      <p>Chargement de la page</p>
    </div>
  );
}

export default Home
