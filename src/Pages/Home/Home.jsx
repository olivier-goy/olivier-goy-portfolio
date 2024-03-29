import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import CarouselProject from "../../Components/Carousel/CarouselProject/CarouselProject";
import Banner from '../../Components/Banner/Banner';
import Skill from '../../Components/Skill/Skill';
import About from '../../Components/About/About';

function Home() {

  window.scrollTo(0, 0)

  const [isDataLoading, setIsDataLoading] = useState(false)
  const [isProfilData, setIsProfilData] = useState([])
  const [isRealizationData, setIsRealizationData] = useState([])

  useEffect(() => {
    async function fetchProfil() {
      try {
        const response = await fetch('https://oliviergoy.dev/Data/profil.json')
        const profilsData = await response.json()
        await profilsData.map(profilData => setIsProfilData(profilData))

        const responseRealization = await fetch('https://oliviergoy.dev/Data/realization.json')
        const realizationsData = await responseRealization.json()
        setIsRealizationData(realizationsData)

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
        <div id="realizations" className="sectionRealization">
          <h2>MES REALISATIONS</h2>
          <CarouselProject realizations={isRealizationData} />
        </div>
      </section>
      <section>
        <About
          descriptionText={isProfilData.description}
          trainningText={isProfilData.trainning}
        />
      </section>
    </div>
  ) : (
    <div className="loading">
      <h2>Chargement de la page</h2>
      <FontAwesomeIcon icon={faSpinner} size="8x" spinPulse />
    </div>
  );
}

export default Home
