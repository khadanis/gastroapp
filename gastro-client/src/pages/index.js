import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection1 from '../components/InfoSection/Patient/indexP'
import InfoSection2 from '../components/InfoSection/Indication/indexI'
import InfoSection3 from '../components/InfoSection/Examen/indexE'
import InfoSection4 from '../components/InfoSection/Conclusion/indexC'
import { patientPage } from '../components/InfoSection/Patient/dataP'
import { indicationPage } from '../components/InfoSection/Indication/dataI'
import { examenPage } from '../components/InfoSection/Examen/dataE'
import { conclusionPAge } from '../components/InfoSection/Conclusion/dataC'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle =() => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Sidebar  isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection1 {...patientPage} />
      <InfoSection2 {...indicationPage} />
      <InfoSection3 {...examenPage} />
      <InfoSection4 {...conclusionPAge} /> 
    </>
  )
}

export default Home