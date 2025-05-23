import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroMain from './Components/HeroSection/HeroMain'
import HeroGradient from './Components/HeroSection/HeroGradient'
import SubHero from './Components/SubHeroSection/SubHero'
import AboutMeMain from './Components/AboutMeSection/AboutMeMain'
import Helper from './Components/Helper/Helper'
import SkillsMain from './Components/MySkillsSection/SkillsMain'
import SkillImg from './Components/MySkillsSection/SkillImg'
import ProjectMain from './Components/ProjectSection/ProjectMain'
import ContactMain from './Components/ContactSection/ContactMain'
import FooterMain from './Components/FooterSection.jsx/FooterMain'
const App = () => {
  return (
   <main>
    <Navbar></Navbar>
    <HeroMain></HeroMain>
    <HeroGradient></HeroGradient>
    <SubHero/>
    <AboutMeMain />
    <SkillsMain />
    <SkillImg/>
    <ProjectMain />
    <ContactMain />
    <FooterMain/>
    {/* <Helper /> */}
   </main>
  )
}

export default App
