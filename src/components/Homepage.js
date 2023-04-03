import Header from './components/Header'
import React from 'react'
import IconBox from './components/IconBox'
import Footer from './components/Footer'
// import ProgrammeSlider from './components/ProgrammeSlider';
import Ranking from './components/Ranking'
import ShooliniAdvantage from './components/ShooliniAdvantage'
import Programmes from './LayoutPages/School-Programe/Programmes'
import SearchProgram from './components/SearchProgram'
import Testimonials from './components/Testimonials'
import ResearchStories from './components/ResearchStories'
import Events from './LayoutPages/events/Events'
import ShooliniImpact from './components/ShooliniImpact'
import SliderDemo from './components/SliderDemo'
import Companies from './components/Companies'
import GalleryImage from './components/GalleryImage'
import { HomeTestimonial } from './components/HomeTestimonial'
 
const Homepage = () => {
  return (
    <>
      <Header />

      <SliderDemo />
      {/* <HeroSlider /> */}

      <IconBox />
      {/* About Area */}
      {/* <AboutUs />

  {/* About Shoolini */}
      <ShooliniAdvantage />

          {/* Logo Slider */}
          <Companies />

     {/* Ranking Area */}
      <Ranking />


      {/* Programmes List */}
      <Programmes />

      {/* SearchProgram Section */}
      <SearchProgram />

      {/* Think Research Section */}
      <Testimonials />

      {/* Testimonials Section */}
      <ResearchStories />

     

      <GalleryImage />

      {/* Impact Section */}
      <ShooliniImpact />

      <HomeTestimonial />
     

      {/* <div className="ht-lg">
      
      </div> */}

      <Footer />
    </>
  )
}

export default Homepage
