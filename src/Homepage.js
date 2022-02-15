
import Header from './components/Header';
import React from 'react'
import IconBox from './components/IconBox';
import Footer from './components/Footer';
// import ProgrammeSlider from './components/ProgrammeSlider';
import Ranking from './components/Ranking';
import LogoSlider from './components/LogoSlider';
import ShooliniAdvantage from './components/ShooliniAdvantage';
import Programmes from './Pages/School-Programe/Programmes';
import SearchProgram from './components/SearchProgram';
import Testimonials from './components/Testimonials';
import ResearchStories from './components/ResearchStories';
import Events from './Pages/events/Events';
import ShooliniImpact from './components/ShooliniImpact';
import SliderDemo from './components/SliderDemo';
import SocialShare from './components/SocialShare';
const Homepage = () => {
  return (
    <> 

      < Header />


    <SliderDemo />
      {/* <HeroSlider /> */}

      <IconBox />
      {/* About Area */}
      {/* <AboutUs />

     {/* Ranking Area */}
      <Ranking />

      {/* Logo Slider */}
      <LogoSlider />

      {/* About Shoolini */}
      <ShooliniAdvantage />

      {/* Programmes List */}
      <Programmes />

      {/* SearchProgram Section */}
      <SearchProgram />

      {/* Think Research Section */}
      <Testimonials />

      {/* Testimonials Section */}
      <ResearchStories />

      {/* Events Section */}
      <Events />

      {/* Impact Section */}
      <ShooliniImpact />

      {/* <div className="ht-lg">

      </div> */}
      <SocialShare />
      
      <Footer />
    </>
  )
}

export default Homepage
